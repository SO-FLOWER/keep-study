import React, { Component } from 'react'

class Serach extends Component{
    constructor(props){
        super(props)
        this.state ={
            value: '',
            result: null
        }
    }

    render(){
       return(
           <div>
               <input type="text" placeholder="请输入查询的省份" onKeyDown={this.serachEvent} value={this.state.value} onChange={this.changeEvent}></input>
               <div>查询的结果:</div>
               <div>{this.state.result}</div>
           </div>
       )
    }
    serachEvent = (e) => {
        if(e.keyCode === 13){
            console.log(e.keyCode);//当keycode是回车的时候再进行查询
            console.log(e.target.value);
            if(this.props.provincesObj[e.target.value] === undefined){
                this.setState({
                    result:<div>输入错误，不是省份，请输入正确的省份</div>
                })
            }else{
                this.setState({
                    result:(
                        <div>
                            <div>确诊人数:{this.props.provincesObj[e.target.value].confirm}</div>
                            <div>死亡人数:{this.props.provincesObj[e.target.value].dead}</div>
                            <div>治愈人数:{this.props.provincesObj[e.target.value].heal}</div>
                        </div>
                    )
                })
            } 
        }
    }

    changeEvent = (e) => {
         this.setState({
             value: e.target.value
         })
    }
}

export default Serach