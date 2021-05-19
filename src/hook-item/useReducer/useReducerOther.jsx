import React, { useReducer } from "react";
import { counterReducer } from "./counterReducer";

export default function UseReducerOther() {
  const [state, dispatch] = useReducer(counterReducer, { counter: 100 });
  return (
    <div>
      <h2>当前计数：{state.counter}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}
