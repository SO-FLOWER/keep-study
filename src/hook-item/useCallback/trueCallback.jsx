//useCallback最主要的用于性能渲染的地方应该和memo结合起来，决定子组件是否需要重新渲染----
import React, { useState, useCallback, memo } from "react";
//useCallback在什么时候使用-
//在一个组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行处理。

const CounterIncrement = memo((props) => {
  console.log("被渲染" + props.title);
  return <button onClick={props.increment}>+1</button>;
});

export default function TrueCallback() {
  console.log("进行重新渲染");
  const [conut, setCount] = useState(0);
  const [recall, setReacll] = useState(true);

  const incrementone = useCallback(
    function increment() {
      console.log(1111);
      setCount(conut + 1);
    },
    [conut]
  );
  const incrementtwo = () => {
    console.log(2222);
    setCount(conut + 1);
  };

  return (
    <div>
      <h2>当前计数:{conut}</h2>
      <CounterIncrement title="btn1" increment={incrementone} />
      <CounterIncrement title="btn2" increment={incrementtwo} />
      <button onClick={(e) => setReacll(!recall)}>切换</button>
    </div>
  );
}
