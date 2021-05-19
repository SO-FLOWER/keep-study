//useCallback实际目的是为了性能优化
import React, { useCallback, useState } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const incrementOne = () => {
    console.log("setCount改变，整个函数重新渲染");
    setCount(count + 1);
  };

  const incrementTwo = useCallback(() => {
    console.log("setCount改变，整个函数重新渲染");
    setCount(count + 1);
  }, []); //useCallback函数中形成了闭包，所以count不会进行重新渲染

  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={incrementOne}>+1</button>
      <button onClick={incrementTwo}>+1</button>
    </div>
  );
}
