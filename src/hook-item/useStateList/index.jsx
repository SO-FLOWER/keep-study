import React, { useRef, useState } from "react";

// const App = () => {
//   const [state, setstate] = useState(0);
//   const increment = () => {
//     setTimeout(() => {
//       setstate(state + 1);
//     }, 1000);
//   };
//   return <div onClick={increment}>{state}</div>;
// };
// export default App;

//--------------------useRef 在渲染周期内永远不会变，因此可以用来引用某些数据
//--------------------修改ref.current 不会发生组件重新渲染
const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const increment = () => {
    setTimeout(() => {
      setCount((ref.current += 1));
    }, 1000);
  };
  return <div onClick={increment}>{count}</div>;
};
export default App;
