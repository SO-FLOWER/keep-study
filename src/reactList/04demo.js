import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//在父元素中使用state控制子元素props，从而达到父元素数据传递给子元素

class Parent extends React.Component{
   constructor(props){
      super(props)
      //设置数据，状态
      this.state = {
         isActive: true
      }
      this.changShow = this.changShow.bind(this)
   }
   render(){
      return(
         <div>
            <button onClick={this.changShow}>控制元素显示</button>
            <Child isActive={this.state.isActive}/>
         </div>
      )
   }
   changShow(){
      this.setState({
         isActive: !this.state.isActive
      })
   }
}

class Child extends React.Component{
   constructor(props){
      super(props)
   }
   render(){
      let strClass = null;
      strClass = this.props.isActive ? " active" : "";
      return(
         <div className={"content"+strClass}>
            <h1>我是子元素</h1>
         </div>
      )
   }
}

ReactDOM.render(
   <Parent />,
   document.querySelector('#root')
)