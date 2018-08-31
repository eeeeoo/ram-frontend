import React from 'react';
import Image from './Image/Image';
import P5Wrapper from 'react-p5-wrapper';
import shape from './Shape/Shape';
export default class Board extends React.Component{

  render(){
    return(
      <div id="board" className="board">
        <Image />
        <P5Wrapper sketch={shape} />
      </div>
    )
  }
}