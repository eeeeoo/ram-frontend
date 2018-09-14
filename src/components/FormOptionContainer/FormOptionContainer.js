import React from 'react';
import './FormOptionContainer.css';
import Line from './assets/Line.svg';
import Oval from './assets/Oval.svg';
import Rectangle from './assets/Rectangle.svg';
import BoardControls from './BoardControls';
import Ellipse from '../Shape/Ellipse';
const FormOptionContainer = (props) => {
  return (
    <div className="menu">
      <div className="board-menu">
        <button onClick={props.addBoard}> + board </button>
        {/* <button onClick={() => props.deleteBoard(props.activeBoard.id)}> - Board</button> */}
      </div>
      <div className="forms">
        <button onClick={() => props.onAddImgNote('image')}>+ image</button>
        <button onClick={() => props.onAddTxtNote('text')}>+ text</button>
        <button onClick={() => props.onAddShapeNote('shape')}>+ shape</button>
        {/* <div className="shape-menu">
          <button>+ shape</button>
          <div name="shape" className="shape-options">
            <button name="oval"><img src={Oval} alt="oval"/></button>
            <button name="rect"><img src={Rectangle} alt="rect"/></button>
            <button name="line"><img src={Line} alt="line"/></button>
          </div> */}
          {/* <select id="shape" name="shape" className="shape-options">
            <option value="ellipse">ellipse</option>
            <option value="rectangle">rectangle</option>
            <option value="line">line</option>
          </select> */}
        {/* </div> */}
      </div>
      <BoardControls />
      {/* <div className="save-board">
        <input className="board-title" name="board-title" type="text" placeholder="title"/>
        <input className="save-button" type="submit" onClick={props.addBoard} value="save"/>
      </div> */}
    </div>
  )
}

export default FormOptionContainer;