import React, { useState, useMemo } from "react";

function calcNum(count) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += i;
  }
  console.log("重新计算一遍");
  return total;
}

export default function CountMemo() {
  console.log("重新执行一次");
  const [count, setCount] = useState(10);
  const [islogin, setIslogin] = useState(true);

  const total = useMemo(() => {
    return calcNum(count);
  }, [count]);

  return (
    <div>
      <h2>数字和:{total}</h2>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      {islogin && <h2>Json</h2>}
      <button onClick={(e) => setIslogin(!islogin)}>切换</button>
    </div>
  );
}
