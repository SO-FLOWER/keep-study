import React from "react";
import useEveryFouceTime from "./everyFouceTime";

export default function FouceTime() {
  const position = useEveryFouceTime();

  return (
    <div style={{ padding: "1000px 0px" }}>
      <h2 style={{ position: "fixed", top: 0, left: 0 }}>
        实时滚动数据{position}
      </h2>
    </div>
  );
}
