import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App /> JS普通对象
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

//1
// let root = document.getElementById('root');
// let h1 = <h1>hellowrold<span>这是副标题</span></h1>
// ReactDOM.render(h1,root)


//2
// function clock(){
//   let time = new Date().toLocaleTimeString();
//   let element = <h1>现在的时间是{time}</h1>
//   let root = document.querySelector('#root');
//   ReactDOM.render(element, root)
// }
// clock()
// setInterval(clock,1000)

//3
// function Clock(props){
//     return(
//          <div>
//             <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
//             <h1>这是函数式组件开发</h1>
//          </div>
//     )
// }
// function run(){
//     ReactDOM.render(
//        <Clock date={new Date()} />,
//        document.querySelector('#root')
//     )
// }
// setInterval(run,1000)

//4
 let time = new Date().toLocaleTimeString();
 let str = '当前时间是:';
 let element = (
     <div>
        <h1>hellowrold</h1>
        <h2>{str+time}</h2>
     </div>
 )

 let man = '发热';
 let element2 = (
    <div>
        <h1>今天是否隔离</h1>
        <h2>{man=="发热"?"隔离":"躺床上"}</h2>
    </div>
 )
 
 let color = 'regRed';
 let element3 =(
    <div className={color}>
        红色的背景颜色
        <img src='https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'></img>
    </div>
 )
 

 ReactDOM.render(
    element3,
    document.getElementById('root')
 )  
