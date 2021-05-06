import React, { PureComponent } from 'react'
import axios from 'axios'
import request from '../axiosTwins/server.jsx'
import InputInfo from './inputInfo/inputInfo'
import WirteInfo from './wirteInfo/wirteInfo'

export default class App extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            commitList:[]
        }
    }

    async componentDidMount(){
        //拿到数据
        // this.setState({
        //     commitList: [...this.state.commitList , ... res]
        // })

        //另一种写法
        // axios.post("https://httpbin.org/post",{
        //     name:"Json",age:24
        // }).then(res => {console.log(res);})

        // axios({
        //     url:"https://httpbin.org/post",
        //     data:{name:"Json",age:24},
        //     method:"post"
        // }).then(res => {console.log(res);}).catch(err => {console.error(err);}) 

        // 另一种写法
        // axios.get("https://httpbin.org/get",{
        //     params:{name:"Json",age:23}
        // }).then(res => {console.log(res);})

        // axios({
        //     url:"https://httpbin.org/get",
        //     params:{name:"Json",age:23}
        // }).then(res => {console.log(res);}).catch(err => {console.error(err);})


        // try {
        //     const result = await axios.get("https://httpbin.org/get",{
        //         params:{name:"Json",age:22}
        //     })
        //     console.log(result);
        // } catch (error) {
        //     console.log(error);
        // }

        const result1 = axios({
            url:"https://httpbin.org/get",
            params:{name:"Json",age:23}
        })
        const result2 = axios({
            url:"https://httpbin.org/post",
            data:{name:"Json",age:22},
            method:"post"
        })
        axios.all([result1,result2]).then(([result1,result2]) => {console.log(result1,result2);})

        request({
            url:"/get",
            params:{name:"Json",age:22},
        }).then(res => {console.log(res);})

        request({
            url:"/post",
            data:{name:"老陈",age:24},
            method:"post"
        }).then(res => {console.log(res);})
    }

    render() {
        const {commitList} = this.state;
        return (
            <div style={{width:"300px", margin:"20px"}}>
                {
                    commitList.map((item,index) => {
                        return <InputInfo comment={item} key={item.id} deleteItem={e => this.deleteItem(index)}/>
                    }) 
                }
                <WirteInfo submitCommit={info => this.submitCommit(info)}></WirteInfo>
            </div>
        )
    }
    submitCommit(info){
        const commitListValue = [...this.state.commitList,info]
        this.setState({
            commitList : commitListValue
        })
    }

    deleteItem(index){
        const delItem = [...this.state.commitList]
        delItem.splice(index,1)
        this.setState({
            commitList : delItem
        })
    }
}
