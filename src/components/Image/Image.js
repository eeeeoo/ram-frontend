import React from 'react';
import './Image.css';

import Draggable from 'react-draggable';

export default class Image extends React.Component{

  addImageMode(){
    return (
      <div className="addImage">
        <button className="deleteButton">X</button>
        <p>add image url</p>
        <input ref="src"/>
        <button className="addButton">+</button>
      </div>  
    )
  }

  displayImageMode(){
    return (
      <div className="displayImage">
        <button className="deleteButton">X</button>
        <img src="http://i.maniadb.com/images/album/125/125468_f_2.jpg" alt=""/>
      </div>
    )
  }

  render(){
    return(
      <Draggable
      axis="x"
      handle=".handle"
      defaultPosition={{x: 12, y: 200}}
      position={null}
      grid={[25, 25]}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}
      >
        <div className="handle">{this.addImageMode()}</div>
    </Draggable>
    )
  }
}