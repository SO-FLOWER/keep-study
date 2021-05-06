import React from 'react';
import {Hell,Pcolor} from './style'

class App extends React.Component{
  render(){
    return(
        <Hell>
          <Pcolor>你好啊，JSON</Pcolor>
          <div className="btn">
            <span>轮播1</span>
            <span className="change">轮播2</span>
            <span>轮播3</span>
            <span>轮播4</span>
          </div>
        </Hell>
    )
  } 
}

export default App;
