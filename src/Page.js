import React, { PureComponent } from 'react'
import styled from 'styled-components';

//porps穿透 attrs使用 this.states属性
const Intput = styled.input.attrs({
    placeholder:"codewhy",
    bColor:"red"
})`
    color: lightblue;
    background-color: ${props => props.color};
`


export default class Page extends PureComponent {
    constructor(props){
        super(props)
        this.state={
           color:"red"
        }
    }
    render() {
        return (
            <div>
                <Intput type="password" color={this.state.color}/>
            </div>
        )
    }
}
