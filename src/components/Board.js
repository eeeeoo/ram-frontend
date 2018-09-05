import React from 'react';
import Image from './Image/Image';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Shape/Sketch';
import ellipse from './Shape/Ellipse';
import Ellipse from './Shape/Ellipse';
import Rectangle from './Shape/Rectangle';

export default class Board extends React.Component{
  render(){
    return(
      <div id="board" className="board">
        {/* <Image /> */}
        {/* <P5Wrapper sketch={ellipse} /> */}
        {/* <Ellipse />
        <Rectangle /> */}
      </div>
    )
  }
}