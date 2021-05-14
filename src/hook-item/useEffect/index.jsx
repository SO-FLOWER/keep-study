//------------------充当componentDidMount、componentDidUpdate、componentWillUnmount这三个生命周期
//----[1、接收两个参数，分别是要执行的回调函数、依赖数组]
//----[2、如果依赖数组为空数组，那么回调函数会在第一次渲染结束后(componentDidMount)执行，返回的函数会在组件卸载时(componentWillUnmount)执行]
//----[3、如果不传依赖数组，那么回调函数会在每一次渲染结束后(componentDidMount和componentDidUpdate)执行]
//----[4、如果依赖数组不为空数组，那么回调函数会在依赖值每次更新渲染结束后（componentDidUpdate）执行，这个依赖值一般是 state 或者 props]
import React, { useEffect, useRef, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const changNum = () => {
//     setCount(count + 1);
//   };
//   useEffect(() => {
//     //第一次渲染结束执行-------
//     const handleScroll = () => {
//       console.log("第一次渲染结束执行-------");
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       //组件卸载之前执行
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     console.log("每次渲染结束都会执行");
//   });

//   useEffect(() => {
//     console.log("只有在count变化后才会执行");
//   }, [count]);
//   return <div onClick={changNum}>{count}</div>;
// };
// export default App;

const moveTo = (dom, delay, option) => {
  dom.style.transform = `translate(${option.x}px)`;
  dom.style.transition = `left ${delay}ms`;
};
const App = () => {
  const ref = useRef();
  useEffect(() => {
    moveTo(ref.current, 10000, { x: 600 });
  }, []);
  return (
    <div
      ref={ref}
      style={{ width: 200, height: 200, backgroundColor: "pink" }}
    ></div>
  );
};
export default App;
//--------------------------渲染机制 render----diff算法----options.diffed----commitRoot----option.commit
