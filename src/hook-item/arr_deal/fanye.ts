import styles from "./index.less";
import { useState, useEffect } from "react";
import axios from "axios";
const { street_code } = window.BASE_CONFIG;
import { BASE_URL, BASE_URL_2 } from "@/utils";

const Numbers = (props: any) => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [check, setCheck] = useState(false);
  const [selectIndex, setSelectIndex] = useState(1);
  const [number, setNumber] = useState(5);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [newList, setNewList] = useState([]);

  const handle = (data) => {
    setNewList(data.slice(0, 5));
    street_code;
    data.forEach((item) => {
      item.code = street_code[item.code];
    });
    setList(data);
    setTotal((data.length / number).toFixed(0));
  };
  const getPrtyPorgnDetail = () => {
    const parmObj = (type: boolean) => {
      return type
        ? BASE_URL
        : BASE_URL_2 + "/dip/dataService/api/getData/yuhua/prty_porgn_detail";
    };
    axios
      .get(parmObj(true))
      .then((res) => {
        let data = res.data.result;
        handle(data);
      })
      .catch((res) => {
        axios.get(parmObj(false)).then((res) => {
          let data = res.data.result;
          handle(data);
        });
      });
  };

  const select = (index) => {
    console.log(index + 1, "index");
    setNewList(list.slice(index * 5, index * 5 + 5));
    setSelectIndex(index + 1);
    if (index >= _arr.length - 5) {
      setStart(index - 4);
      setEnd(_arr.length);
      return;
    }
    setStart(index);
    setEnd(index + 4);
  };

  var _arr = Array.apply(null, Array(parseInt(total))).map(function (item, i) {
    return i;
  });

  const pagaeList = _arr.map((res, index) => {
    if (list.length > 8) {
      return list.length > 8 && index === _arr.length - 3 ? (
        <span
          className={index + 1 === selectIndex ? styles.checked : styles.middle}
          onClick={() => {
            // if (selectIndex > _arr.length - 7 || index > _arr.length - 4) return;

            setSelectIndex(selectIndex + 4);
            if (selectIndex > _arr.length - 4) {
              select(index);
              return;
            } else {
              setStart(start + 4);
              setEnd(end + 4);
            }
          }}
        >
          {console.log(selectIndex, "selectIndex")}
          {console.log(_arr.length - 7, "_arr.length - 7")}
          {selectIndex < _arr.length - 4 ? "..." : index + 1}
        </span>
      ) : start <= index && index <= end ? (
        <span
          className={index + 1 === selectIndex ? styles.checked : styles.middle}
          onClick={() => select(index)}
        >
          {index + 1}
        </span>
      ) : index === _arr.length - 1 || index === _arr.length - 2 ? (
        <span
          className={index + 1 === selectIndex ? styles.checked : styles.middle}
          onClick={() => select(index)}
        >
          {index + 1}
        </span>
      ) : (
        ""
      );
    } else {
      return (
        <span
          className={index + 1 === selectIndex ? styles.checked : styles.middle}
          onClick={() => select(index)}
        >
          {index + 1}
        </span>
      );
    }
  });

  useEffect(() => {
    getPrtyPorgnDetail();
  }, []);

  return (
    <div className={styles.dialogs}>
      <div className={styles.title}>报到支部数量</div>
      <table>
        <thead>
          <tr>
            <td>党组织名称</td>
            <td>
              负责人{" "}
              <span
                style={{ opacity: ".2", verticalAlign: "2px", margin: "0 4px" }}
              >
                |
              </span>{" "}
              电话
            </td>
            <td>党组织成员数</td>
            <td>街道</td>
          </tr>
        </thead>
        <tbody>
          {list.length > 0
            ? newList.map((item) => {
                return (
                  <tr>
                    <td>
                      <div>{item.name}</div>
                    </td>
                    <td>
                      <div>
                        {item.owner}{" "}
                        <span
                          style={{
                            opacity: ".2",
                            verticalAlign: "2px",
                            margin: "0 4px",
                          }}
                        >
                          |
                        </span>
                        {item.phone}
                      </div>
                    </td>
                    <td>
                      <div>{item.cnt}个</div>
                    </td>
                    <td>
                      <div>{item.code}</div>
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>

      {/* 分页 */}
      <div className={styles.page}>
        <span
          onClick={() => {
            if (selectIndex === 1) return;
            if (start >= 1) {
              setStart(start - 1);
              setEnd(end - 1);
            }

            setSelectIndex(selectIndex - 1);

            setNewList(
              list.slice((selectIndex - 2) * 5, (selectIndex - 2) * 5 + 5)
            );
          }}
          className={styles.left}
        >
          &lt;
        </span>
        {pagaeList}
        <span
          onClick={() => {
            if (selectIndex === _arr.length) return;
            if (start < _arr.length - 7) {
              setStart(start + 1);
              setEnd(end + 1);
            }

            setSelectIndex(selectIndex + 1);
            setNewList(list.slice(selectIndex * 5, selectIndex * 5 + 5));
          }}
          className={styles.right}
        >
          &gt;
        </span>
      </div>
    </div>
  );
};

// export default fullScreen({ style, mode: 3 })(Numbers);
export default Numbers;
