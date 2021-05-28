import { useState, useEffect, useRef } from "react";
import styles from "./index.less";
import fullScreen from "@sl-theia/full-screen";
import { mergecssname } from "@sl-theia/theia-utils";
import axios from "@/axios";
import {
  injectSocket,
  injectSocketProps,
} from "@sl-theia/theia-socket-io-client";
import { BASE_URL, BASE_URL_2 } from "@/utils";
const style = {
  width: 1042,
  height: 576,
};
const URL = "/dip/dataService/api/getData/yuhua/dnzhctmp";
const LOU_YU = "/dip/dataService/api/getData/yuhua/dnzhc";

const Center = (props: any) => {
  const [currentLous, setCurrentLous] = useState(null);
  const [currentCeng, setcurrentCeng] = useState(null);
  const [currentFang, setCurrentFang] = useState(null);
  const [isScroll, setIsScroll] = useState(false);
  const [scroll, setScroll] = useState(0);

  const yihuyidangList = useRef(null);
  const [leftData, setLeftData] = useState({
    com_cnt: 0,
    norm_cnt: 0,
    data: [],
  });

  const [louhao, setLouhao] = useState({
    list: {},
  });

  const handleChangeLou = (louId: any) => {
    if (louId != currentLous) {
      setCurrentLous(louId);
      setcurrentCeng(Object.keys(louhao.list[`${louId}`])[0]);
      setCurrentFang(null);
    }
  };

  const handleChangeCeng = (e: any, cengId: any) => {
    e.stopPropagation();
    if (cengId != currentCeng) {
      setcurrentCeng(cengId);
      setCurrentFang(null);
    }
  };

  const handleChangeFang = (e: any, fangId: any) => {
    e.stopPropagation();
    if (currentFang && currentFang == fangId) {
      setCurrentFang(null);
    }
    if (currentFang !== fangId) {
      setCurrentFang(fangId);
    }
  };

  const getLou = () => {
    const lous = [];
    Object.keys(louhao.list).forEach((item: any, i) => {
      if (i > 2) return;
      lous.push(
        <div
          onClick={() => {
            handleChangeLou(item);
          }}
          className={mergecssname({
            [styles.normalLou]: true,
            [styles.activeLou]: currentLous == item,
          })}
        >
          {item}号楼
        </div>
      );
    });
    return lous;
  };

  // 展示指定号楼的拥有的层数
  const getCeng = () => {
    const ceng = [];
    if (!louhao.list[`${currentLous}`]) return;
    Object.keys(louhao.list[`${currentLous}`]).forEach((item: any) => {
      ceng.push(
        <div
          onClick={(e) => {
            handleChangeCeng(e, item);
          }}
          className={mergecssname({
            [styles.normalCeng]: true,
            [styles.activeCeng]: currentCeng == item,
          })}
        >
          {item}
        </div>
      );
    });
    return ceng;
  };

  // 展示指定号楼指定层的拥有的房间
  const getFang = () => {
    const fang = [];
    if (
      !louhao.list[`${currentLous}`] ||
      !louhao.list[`${currentLous}`][`${currentCeng || 0}`]
    )
      return;
    for (const key in louhao.list[`${currentLous}`][`${currentCeng}`]) {
      const item = louhao.list[`${currentLous}`][`${currentCeng}`][key];
      fang.push(
        <div
          onClick={(e) => {
            handleChangeFang(e, key);
          }}
          className={mergecssname({
            [styles.normalFang]: true,
            [styles.yellowFang]: item.filter((i: any) => i.sun == 1).length > 0,
            [styles.blueFang]: item.filter((i: any) => i.sun == 2).length > 0,
            [styles.selectFang]: currentFang == key,
          })}
        >
          {key}
        </div>
      );
    }
    return fang;
  };

  const getPeople = () => {
    const people = [];
    if (
      !louhao.list[currentLous] ||
      !louhao.list[currentLous][currentCeng] ||
      !louhao.list[currentLous][currentCeng][currentFang]
    )
      return false;
    const fangjianData = louhao.list[currentLous][currentCeng][currentFang];
    fangjianData.forEach((item: any) => {
      people.push(
        <div className={styles.peopleData}>
          <p>
            <span>{item.name}</span>
            <span>{item.sex == 1 ? "男" : "女"}</span>
          </p>
          <p>{item.phone}</p>
        </div>
      );
    });

    return people;
  };

  // 物业信息处理
  const processLeftData = (res: any) => {
    if (res.code === 200 && res.success) {
      setLeftData({
        com_cnt: res.result[0]?.com_cnt,
        norm_cnt: res.result[0]?.norm_cnt,
        data: [
          {
            topic: "物业经理",
            info: res.result[0]?.wy_name,
          },
          {
            topic: "在勤保安",
            info: res.result[0]?.sf_name,
          },
          {
            topic: "业委会代表",
            info: res.result[0]?.ywh_name,
          },
        ],
      });
    }
  };

  // 楼宇信息处理
  const processLouyuData = (res: any) => {
    let test = {};
    let newData = {};
    if (res.code === 200 && res.success) {
      newData.name = res.result[0].com_name;
      newData.list = {};
      test.list = {};
      res.result.forEach((item) => {
        if (test.list[item.cell]) {
          test.list[item.cell].push(item);
        } else {
          test.list[item.cell] = [item];
          newData.list[item.cell] = {};
        }
      });
      console.log(newData);

      for (const key in test.list) {
        test.list[key].sort((a, b) => {
          return a.floor_num - b.floor_num;
        });

        let centerData = {};

        test.list[key].forEach((item) => {
          if (centerData[item.floor_num]) {
            centerData[item.floor_num].push(item);
          } else {
            centerData[item.floor_num] = [item];
            newData.list[key][item.floor_num] = {};
          }
        });

        for (const keys in centerData) {
          centerData[keys].forEach((element) => {
            if (newData.list[key][keys][element.room]) {
              newData.list[key][keys][element.room].push(element);
            } else {
              newData.list[key][keys][element.room] = [element];
            }
          });
        }
      }

      // 默认第一个楼的第一层
      setCurrentLous(Object.keys(newData.list)[0]);
      setcurrentCeng(
        Object.keys(newData.list[Object.keys(newData.list)[0]])[0]
      );
      setLouhao(newData);
    }
  };

  const getLouInfo = () => {
    axios
      .get(BASE_URL + LOU_YU)
      .then((res) => {
        processLouyuData(res);
        console.log(res);
      })
      .catch((err) => {
        axios.get(BASE_URL_2 + LOU_YU).then((res) => {
          processLouyuData(res);
        });
      });
  };

  // 物业信息
  const getLeftInfo = () => {
    axios
      .get(BASE_URL + URL)
      .then((res) => {
        processLeftData(res);
      })
      .catch((err) => {
        axios.get(BASE_URL_2 + URL).then((res) => {
          processLeftData(res);
        });
      });
  };

  const socketApiRegister = () => {
    const { socket } = props;
    socket.registerAPI("changeYihuyidang", (data: any) => {
      setCurrentFang(data.fanghao);
      setcurrentCeng(data.cheng);
      setCurrentLous(data.dong);
      setScroll(data.bili);
    });
  };

  useEffect(() => {
    getLeftInfo();
    getLouInfo();
    socketApiRegister();
  }, []);

  useEffect(() => {
    var box = document.getElementById("height");
    if (box && box.offsetHeight > 260) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [getPeople]);

  useEffect(() => {
    if (currentCeng) {
      var box = document.getElementById("chengs");
      console.log(box.scrollHeight);
      console.log(scroll);
      box.scrollTop = scroll * box.scrollHeight;
    }
  }, [currentCeng]);

  return (
    <div className={styles.center}>
      <div className={styles.title}>东南智汇城6号院</div>
      <div
        className={styles.container}
        style={currentFang ? { width: style.width } : { width: "833px" }}
      >
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <div className={styles.leftTopItem}>
              <p>
                <span className={styles.icon} />
                商业住宅
              </p>
              <p className={styles.value}>
                <span className={styles.num}>{leftData.com_cnt}</span>户
              </p>
            </div>
            <div className={styles.leftTopItem}>
              <p>
                <span className={styles.icon} />
                普通住宅
              </p>
              <p className={styles.value}>
                <span className={styles.num}>{leftData.norm_cnt}</span>户
              </p>
            </div>
          </div>
          <div className={styles.leftBottom}>
            <div className={styles.des}>
              <span className={styles.point} />
              主要人员
            </div>
            {leftData.data.map((item: any) => (
              <div className={styles.renyuan}>
                <p className={styles.topic}>{item.topic}</p>
                <p className={styles.renyuandes}>
                  <span className={styles.name}>{item.info}</span>
                  <span>{item.phone}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.lou}>
            {Object.keys(louhao.list).length !== 0 ? getLou() : null}
          </div>
          <div className={styles.louceng}>
            <div className={styles.fangwu}>
              {currentCeng ? getFang() : null}
            </div>
            <div className={styles.ceng}>
              {currentLous ? (
                <div id="chengs" className={styles.cengItemContain}>
                  {getCeng()}
                </div>
              ) : null}
              {currentFang ? (
                <div className={styles.rightData}>
                  <div className={styles.fangjianhao}>{currentFang}</div>
                  <div className={styles.peopleDataContain}>
                    <div
                      className={`${styles.popbox} ${
                        isScroll ? styles.animates : ""
                      }`}
                      id="height"
                      ref={yihuyidangList}
                    >
                      {getPeople()}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.contentDes}>
            <div>
              <span className={styles.icon} />
              党员家庭
            </div>
            <div>
              <span className={styles.icon} />
              特殊人群
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fullScreen({ style, mode: 3 })(
  injectSocket({ name: "WebYihuyidang" })(Center)
);
// export default Center;
