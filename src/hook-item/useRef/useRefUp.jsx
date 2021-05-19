import React, { useEffect, useRef, useState } from "react";

//用ref进行保留上一次的数值----------------
export default function UseRefUp() {
  const [count, setCount] = useState(0);
  const numRef = useRef(count);
  useEffect(() => {
    numRef.current = count;
  }, [count]);
  return (
    <div>
      <h2>count上一次的值: {numRef.current}</h2>
      <h2>count这一次的值: {count}</h2>
      <button onClick={(e) => setCount(count + 10)}>+10</button>
    </div>
  );
}
