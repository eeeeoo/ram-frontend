import React from 'react';
import './FormOptionContainer.css';
import Line from './assets/Line.svg';
import Oval from './assets/Oval.svg';
import Rectangle from './assets/Rectangle.svg';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';
import { addImageForm } from '../../actions/form';

const FormOptionContainer = (props) => {
  console.log(props.imgForms.find(imgForm => imgForm.imgForm.id === 1))
  return (
    <div className="menu">
      <div className="forms">
        <button onClick={() => props.addImageForm()}>+ image</button>
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
        <input className="board-title" name="board-title" type="text" placeholder="title"/>
        <input className="save-button" type="submit" value="save"/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    imgForms: state.formReducer.imgForms
  }
}

export default withAuth(
  connect(mapStateToProps,{addImageForm})(FormOptionContainer)
);