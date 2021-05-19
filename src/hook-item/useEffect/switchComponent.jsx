import React, { useState } from "react";
import ListData from "../hookDeildata/listData";

export default function SwitchComponent() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <ListData />}
      <button onClick={(e) => setShow(!show)}>显示/隐藏</button>
    </div>
  );
}
