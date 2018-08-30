import React from 'react';
import './FormOptionContainer.css';

const FormOptionContainer = () => (
  <div className="menu">
    <div className="forms">
      <button>+ image</button>
      <button>+ text</button>
      <div className="shape-menu">
        <button>+ shape</button>
        <select id="shape" name="shape" className="shape-options">
          <option value="ellipse">ellipse</option>
          <option value="rectangle">rectangle</option>
          <option value="line">line</option>
        </select>
      </div>
    </div>
  </div>
)

export default FormOptionContainer;