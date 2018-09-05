import React from 'react';
import Draggable from 'react-draggable';

// export default function ellipse (p) {
//   p.setup = function () {
//     p.createCanvas(100, 100);
//     p.background(255);
//     p.fill(249, 166, 0)
//   };

//   p.draw = function () {
//     p.rect(0,0,100,100);
//   };
// };

export default class Ellipse extends React.Component{

  render(){
    return(
      <Draggable
      handle=".dot"
      defaultPosition={{x: 12, y: 200}}
      position={null}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}
      >
        <span id="dot" className="dot" style={{
          height: '100px',
          width: '100px',
          backgroundColor: '#F9A600',
          borderRadius: '50%',
          display: 'inline-block',
        }}></span>
      </Draggable>
        
    )
  }
}