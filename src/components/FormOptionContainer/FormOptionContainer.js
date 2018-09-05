import React from 'react';
import './FormOptionContainer.css';
import Line from './assets/Line.svg'
import Oval from './assets/Oval.svg'
import Rectangle from './assets/Rectangle.svg'

const FormOptionContainer = () => (
  <div className="menu">
    <div className="forms">
      <button>+ image</button>
      <button>+ text</button>
      <div className="shape-menu">
        <button>+ shape</button>
        <div name="shape" className="shape-options">
          <button name="oval"><img src={Oval} alt="oval"/></button>
          <button name="rect"><img src={Rectangle} alt="rect"/></button>
          <button name="line"><img src={Line} alt="line"/></button>
        </div>
        {/* <select id="shape" name="shape" className="shape-options">
          <option value="ellipse">ellipse</option>
          <option value="rectangle">rectangle</option>
          <option value="line">line</option>
        </select> */}
      </div>
    </div>
    <div className="save-board">
      <input className="board-title" name="board-title" type="text"/>
      <input className="save-button" type="submit" value="save"/>
    </div>
  </div>
)

export default FormOptionContainer;