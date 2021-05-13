import React from "react";
import ReactDOM from "react-dom";
//import './index.css'

//                  1直接进行条件判断进行渲染

// function  UserGreet(props){
//     return (<h1>欢迎登陆</h1>)
// }

// function  UserLogin(props){
//    return (<h1>请先登陆</h1>)
// }

// class LoginCom extends React.Component{
//    constructor(props){
//       super(props)
//       this.state = {
//          isLogin: false
//       }
//    }

//    render(){
//       if(this.state.isLogin == true){
//          return(<UserGreet />)
//       }else{
//          return(<UserLogin />)
//       }
//    }
// }

// ReactDOM.render(
//    <LoginCom />,
//    document.querySelector('#root')
//)

//               2通过变量进行条件语句的判断
function UserGreet(props) {
  return <h1>欢迎登陆</h1>;
}

function UserLogin(props) {
  return <h1>请先登陆</h1>;
}

class LoginCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    let element = null;
    if (this.state.isLogin === true) {
      element = <UserGreet />;
    } else {
      element = <UserLogin />;
    }

    return (
      <div>
        <h1>这是头部</h1>
        {element}
        <h1>这是三元运算符的操作</h1>
        {this.state.isLogin ? <UserLogin /> : <UserGreet />}
        <h1>这是尾部</h1>
      </div>
    );
  }
}

ReactDOM.render(<LoginCom />, document.querySelector("#root"));
