import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    //构造函数
    constructor(props){
       super(props)
       //构造函数初始化数据，将需要改变的数据初始化到state中
       this.state = {
          time: new Date().toLocaleTimeString()
       }
    }

    render(){
       return(
         <div>
            <h1>当地时间:{this.state.time}</h1>
         </div>
       )
    }

    //生命周期函数，组件渲染完成时的函数
   componentDidMount(){
      setInterval(() => {
            console.log(this.state.time);
            //切勿直接修改state数据，直接state重新渲染内容，需要使用setstate
            this.setState({
               time: new Date().toLocaleTimeString()
            })
      },1000)
   }
}

ReactDOM.render(
   <Clock />,
   document.getElementById('root')
)


