import React from 'react';
import Image from './Image/Image';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Shape/Sketch';
import ellipse from './Shape/Ellipse';
import Ellipse from './Shape/Ellipse';
import Rectangle from './Shape/Rectangle';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { addImageForm, dragForm, addImageSrc } from '../actions/form';

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

  return(
    <div id="board" className="board">
      {/* <P5Wrapper sketch={ellipse} /> */}
      {/* <Ellipse />
      <Rectangle /> */}
      {props.imgForms.map(imgForm => eachImage(imgForm.imgForm))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    imgForms: state.formReducer.imgForms
  }
}

export default withAuth(
  connect(mapStateToProps,{addImageForm, addImageSrc})(Board)
);