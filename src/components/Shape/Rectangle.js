import React from 'react';
import Draggable from 'react-draggable';

export default class Rectangle extends React.Component{
  render(){
    return(
      <Draggable
      handle=".rect"
      defaultPosition={{x: 12, y: 200}}
      position={null}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}
      >
        <span id="rect" className="rect" style={{
          height: '100px',
          width: '100px',
          backgroundColor: '#F9A600',
          display: 'inline-block',
        }}></span>
      </Draggable>
    )
  }
}