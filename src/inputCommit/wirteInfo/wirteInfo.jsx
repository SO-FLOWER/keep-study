import React, { PureComponent } from 'react'
import {Input , Button} from 'antd'
import moment from 'moment'

export default class WirteInfo extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            conatian: ""
        }
    }
    render() {
        const {conatian} = this.state
        return (
            <div>
                <Input.TextArea rows={4} value={conatian} onChange={e => {this.textValue(e)}}/>
                <Button type="primary" onClick={e => this.putValue()}>评论</Button>
            </div>
        )
    }
    textValue(e){
        this.setState({
            conatian: e.target.value
        })
    }
    putValue(){
        const commentInfo = {
            id:moment().valueOf(),
            avater:"https://upload.jianshu.io/users/upload_avatars/24673396/36b6041a-291b-4e5c-844e-1f316362e6ae?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
            nickname:"Json",
            datetime:moment().format('h:mm:ss'),
            contain: this.state.conatian
        }
        this.props.submitCommit(commentInfo)  
        this.setState({
            conatian:""
        })
    }
}
