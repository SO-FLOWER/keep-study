import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar } from 'antd'
import {DeleteOutlined} from '@ant-design/icons'

export default class InputInfo extends PureComponent {

    render() {
        const {contain,avater,nickname,datetime} = this.props.comment
        return (
            <div>
                <Comment
                    author={<a href="/#">{nickname}</a>}
                    avatar={<Avatar src={avater} alt={nickname}/>}
                    content={<p>{contain}</p>}
                    datetime={<Tooltip title={datetime}><span>{datetime}</span></Tooltip>}
                    actions={[<span onClick={ e =>  this.deleteItem()}><DeleteOutlined />删除</span>]}
                />
            </div>
        )
    }
    deleteItem(){
        this.props.deleteItem();
    }
}
