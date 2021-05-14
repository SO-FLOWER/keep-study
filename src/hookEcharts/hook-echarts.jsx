import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";

const EchartsHook = () => {
  const echartRef = useRef(null);

  useEffect(() => {
    var globalEchart = echarts.init(echartRef.current);

    var option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };
    globalEchart.setOption(option);
  }, []);

  return (
    <>
      <div ref={echartRef} style={{ height: 400 }} />
    </>
  );
};

export default EchartsHook;
