import React, { useReducer } from "react";
import { counterReducer } from "./counterReducer";
import UseReducerOther from "./useReducerOther";

//数据是不会共享的，它们只是使用了相同的counterReducer的函数而已。
//所以，useReducer只是useState的一种替代品，并不能替代Redux。

export default function UseReducerChange() {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });
  return (
    <div>
      <h2>当前计数:{state.counter}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>-1</button>
      <br />
      <UseReducerOther />
    </div>
  );
}
