import React from 'react';
import Image from './Image/Image';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Shape/Sketch';
import ellipse from './Shape/Ellipse';
import Ellipse from './Shape/Ellipse';
import Rectangle from './Shape/Rectangle';
import Text from './Text/Text';

import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import * as actions from '../actions';

const Board = (props) => {
  console.log(props.imgForms)

  const eachImage = (imgData) => {
    return (<Image
              key={imgData.id}
              id={imgData.id}
              src={imgData.src}
              position={imgData.position}
              editing={imgData.editing}
              imgWidth={imgData.imgWidth}
              imgHeight={imgData.imgHeight}
              // dragForm={() => props.dragForm(imgData.id, imgData.position)}
            />)
  }

  const eachText = (txtData) => {
    return(<Text 
            key={txtData.id}
            id={txtData.id}
    
          />)
  }

  return(
    <div id="board" className="board">
      {/* <P5Wrapper sketch={ellipse} /> */}
      {/* <Ellipse />
      <Rectangle /> */}
      {props.imgForms.map(imgForm => eachImage(imgForm.imgForm))}
      {props.txtForms.map(txtForm => eachText(txtForm))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    imgForms: state.formReducer.imgForms,
    txtForms: state.textReducer.txtForms
  }
}

export default withAuth(
  connect(mapStateToProps, actions)(Board)
);