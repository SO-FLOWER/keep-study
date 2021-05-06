import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'

//子传父
// 调用父元素的函数从而操控父元素的数据，从而实现数据从子元素传递给父元素

class Parent extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         childData : null
      }
   }

   render(){
      return(
         <div>
            <h1>子元素传递给父元素的数据:{this.state.childData}</h1>
            <Child setChildData={this.setChildData}/>
         </div>
      )
   }

   //剪头函数取消了this的绑定
   setChildData = (data) => {
       this.setState({
          childData: data
       })
   }
}

class Child extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         msg: "helloword"
      }
   }

   render(){
      return(
         <div>
            <button onClick={this.sendData}> 传递helloword给父元素</button>
            {/* {不用定义函数，直接调用传参需调用箭头函数} */}
            <button onClick={()=>{this.props.setChildData('直接进行调用props函数传值')}}> 传递helloword给父元素</button>
         </div>
      )
   }

   sendData = () => {
      console.log(this.state.msg);
      console.log(this.props);  
      //将子元素传递给父元素，实际就是调用了父元素传递进来的父类函数 
      //调用父类的函数
      this.props.setChildData(this.state.msg)
   }
}

ReactDOM.render(
   <Parent />,
   document.querySelector('#root')
)
