import React from 'react';
import Image from './Image/Image';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Shape/Sketch';
import ellipse from './Shape/Ellipse';
import Ellipse from './Shape/Ellipse';
import Rectangle from './Shape/Rectangle';

const Board = () => {
  // createMarkup = (content) => {
  //   return {__html: content};
  // }
  return(
    <div id="board" className="board">
      {/* <div dangerouslySetInnerHTML={this.createMarkup(this.props.board.content)}/> */}
      {/* <Image /> */}
      {/* <P5Wrapper sketch={ellipse} /> */}
      {/* <Ellipse />
      <Rectangle /> */}
    </div>
  )
}

export default Board