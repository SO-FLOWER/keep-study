import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'

function ListItem(props){
   return(
      <li>
             <h3>{(props.index+1) + props.data.title}</h3>
             <p>{ props.data.content}</p>
       </li>
   )
}

//调用一个函数方法进行事件响应
class ListItem2 extends React.Component{
    constructor(props){
       super(props)
    }
    render(){
       return(
         <li onClick={(event) => {this.clickEvent(this.props.index,this.props.data.title,event)}}>
               <h3>{(this.props.index+1) + this.props.data.title}</h3>
               <p>{ this.props.data.content}</p>
         </li>
       )}
    clickEvent = (index,title,event) => {
      alert(index+ "-" + title)
    }
}

//1用原生的方法进行列表渲染
   class List extends React.Component{
      constructor(props){
         super(props)
         this.state = {
               list : [
                  {
                     title: "第一节 React事件",
                     content: "事件内容"
                  },
                  {
                     title: "第二节 React事件",
                     content: "事件内容"
                  },
                  {
                     title: "第三节 React事件",
                     content: "事件内容"
                  }               ]
         }
      }
      render(){
                //-------原生的方法进行循环生成列表
            // let listArr = [];
            // for (let i = 0; i < this.state.list.length; i++) {
            //    let item = (
            //       <li>
            //             <h3>{this.state.list[i].title}</h3>
            //             <p>{this.state.list[i].content}</p>
            //       </li>
            //    )
            //    listArr.push(item)
            // }
               //--------用es6的方法进行循环列表的生成
            // let listArr = this.state.list.map((item,index) => {
            //       return(  
            //          <li key={index}>
            //             <h3>{(index+1) + item.title}</h3>
            //             <p>{(index+1) +  item.content}</p>
            //          </li>
            //       )
            // })
            // console.log(listArr);
               //定义函数组件来进行传递
               let listArr = this.state.list.map((item,index) => {
                      return(  
                          <ListItem2 key={index}  data={item} index={index}/>
                      )
               })
               return(
                  <div>
                     <h1>今天课程内容</h1>
                     <ul>
                        {listArr}
                        <li>
                           <h3>这是标题</h3>
                           <p>这是内容</p>
                        </li>
                        <h1>复杂没有组件完成列表</h1>
                        {
                              this.state.list.map((item,index) => {
                                  return(
                                     <li key={index} onClick={(e) => {this.clickFn(item,index,e)}}>
                                        <h3>{(index + 1) + item.title}</h3>
                                        <p>{(index+1) + item.content}</p>
                                     </li>
                                  )
                              })
                              
                        }
                     </ul>
                  </div>
               )
      }
      clickFn = (item,index,event) => {
         alert((index +1)+ "-" + item.title)
       }
   }

   ReactDOM.render(
      <List />,
      document.querySelector('#root')
   )