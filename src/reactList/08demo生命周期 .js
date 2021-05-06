import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import './index.css'

//react生命周期三个状态:  Mounting 将组件插入Dom中  Updating 将数据更新到DOM中  Unmounting 将组件移除到Dom中
// 生命周期中的钩子函数:  CompontWillMount 组件将要渲染 (AXAJ 添加动画前的类)  CompontDidMount 组件渲染完毕 (添加动画) CompontWillReceiveProps 组件将要接收props数据 (查看接收props的数据是什么)
//                       ShouldComponentUpdate 组价接收到新的state或者props判断是否更新，返回布尔值
//                       CompontWillUpdate 组件将要更新 CompontentDidUpdate 组件已经更新 ComponentWillUnmont组价将要卸载

class Comlife extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg: 'hello world'
        }
        console.log("constructor构造函数");
    }
    componentWillMount(){
        console.log("componentWillMount组件将要渲染");
    }
    componentDidMount(){
        console.log("componentDidMount组件渲染完毕");
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps组件将要接收到新的state和props");
    }
    shouldComponentUpdate(){
        //如果更新就返回为true，不更新就返回为false
        console.log("进行判断是否要更新内容");
        if(this.state.msg === 'hello world'){
            return true
        }else{
            return false
        }

    }
    componentWillUpdate(){
        console.log("componentWillUpdate组件将要更新");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate组件更新完毕");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount移除");
    }

    render(){
        console.log("render渲染函数");
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMsg}>组件更新</button>
            </div>
        )
    }
    changeMsg= () => {
        this.setState({
            msg: 'hello 老陈'
        })
    }
}

class ParentCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShow: true
        }
    }
    render(){
        if(this.state.isShow){
            return (
                <div>
                    <button onClick={this.removeLife}>移除comlife</button>
                    <Comlife />
                </div>
            )
        }else{
            return <h1>将comlife已移除</h1>
        }
    }
    removeLife = () => {
        this.setState(
            {
                isShow: false
            }
        )
    }
}

ReactDOM.render(
    <ParentCom />,    
    document.querySelector('#root')
)