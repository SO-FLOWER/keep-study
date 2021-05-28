import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DealNum() {
  const [currContain, setCurrContain] = useState([0, 0, 0]);
  const [data, setData] = useState([]);
  const dealData = () => {
    axios
      .get("http://8.135.115.201:9370/dip/dataService/api/getData/yuhua/dnzhc")
      .then((res) => {
        const allData = res.data.result;
        console.log(allData);
        allData.map((e) => {
          if (!data[e.bul_name]) {
            data[e.bul_name] = {};
          }
          if (!data[e.bul_name][e.cell]) {
            data[e.bul_name][e.cell] = {};
          }
          if (!data[e.bul_name][e.cell][e.room]) {
            data[e.bul_name][e.cell][e.room] = [];
          }
          data[e.bul_name][e.cell][e.room].push(e);
        });
        console.log(data);
        //--------------------------------------------------

        const finallyData = Object.entries(data).map(([bul_name, cell]) => {
          return {
            bul_name: bul_name,
            data: Object.entries(cell).map(([cell, floor_num]) => {
              return {
                cell: cell,
                data: Object.entries(floor_num).map(([room, people]) => {
                  return {
                    floor_num: room,
                    data: people,
                  };
                }),
              };
            }),
          };
        });
        console.log(finallyData);
        setData(finallyData);
      });
  };
  useEffect(() => {
    dealData();
  }, []);

  //   console.log(data);
  //   if (data !== undefined) {
  //     console.log(data[currContain[0]].data);
  //   }
  const ceng = data?.[currContain[0]]?.data;
  const room = ceng?.[currContain[1]]?.data;
  const people = room?.[currContain[2]];
  console.log(ceng);
  console.log(room);
  console.log(people);

  return (
    <div>
      <div>
        {data.map((item, i) => {
          return (
            <div
              onClick={() => {
                setCurrContain([i, 0, -1]);
              }}
            >
              {item.bul_name}单元
            </div>
          );
        })}
      </div>
      <div>
        {ceng?.map((item, i) => {
          return (
            <div
              onClick={() => {
                setCurrContain([currContain[0], i, -1]);
              }}
            >
              {item.cell}
            </div>
          );
        })}
      </div>
      <div>
        {room?.map((item, i) => {
          return (
            <div
              onClick={() => {
                setCurrContain(currContain.slice(0, 2).concat([i]));
              }}
            >
              {item.floor_num}
            </div>
          );
        })}
      </div>
      <div>
        {people?.data?.map((item, i) => {
          return <div>姓名:{item.name}</div>;
        })}
      </div>
    </div>
  );
}
