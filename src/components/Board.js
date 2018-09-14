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

class Board extends React.Component{

  eachNote(txtNote){
    return (<Text
              key={txtNote.id}
              id={txtNote.id}
              position={txtNote.position}
              editing={txtNote.editing}
              onTxtNoteDrag={this.props.onTxtNoteDrag}
              onTxtNoteToggle={this.props.onTxtNoteToggle}
              onTxtNoteRemove={this.props.onTxtNoteRemove}
              onTxtNoteSave={this.props.onTxtNoteSave}
              onColorChange={this.props.onColorChange}
              color={txtNote.color}
              note={txtNote.note}
            />)
  }

  eachImage(imgNote){
    return (<Image
              key={imgNote.id}
              id={imgNote.id}
              src={imgNote.src}
              position={imgNote.position}
              editing={imgNote.editing}
              imgWidth={imgNote.imgWidth}
              imgHeight={imgNote.imgHeight}
              onImgNoteDrag={this.props.onImgNoteDrag}
              onImgNoteToggle={this.props.onImgNoteToggle}
              onImgNoteRemove={this.props.onImgNoteRemove}
              onImgNoteSave={this.props.onImgNoteSave}
            />)
  }

  eachShape(shapeNote){
    return (<Ellipse
              key={shapeNote.id}
              id={shapeNote.id}
              color={shapeNote.color}
              shape={shapeNote.shape}
              position={shapeNote.position}
              editing={shapeNote.editing}
              onShapeNoteDrag={this.props.onShapeNoteDrag}
              onShapeNoteToggle={this.props.onShapeNoteToggle}
              onShapeNoteRemove={this.props.onShapeNoteRemove}
              onShapeNoteSave={this.props.onShapeNoteSave}
            />)
  }

  render(){
  return(
    <React.Fragment>
      {/* <P5Wrapper sketch={ellipse} /> */}
      {/* <Ellipse />
      <Rectangle /> */}
      {
          !this.props.activeBoard ? '' : //no board available to render

          <div id="board" className="board">
            {this.props.activeBoard.txtNotes.map(this.eachNote, this)}
            {this.props.activeBoard.imgNotes.map(this.eachImage, this)}
            {this.props.activeBoard.shapeNotes.map(this.eachShape, this)}

          </div>
      }
    </React.Fragment>
  )
}
}


// const mapStateToProps = (state) => {
//   return {
//     imgForms: state.formReducer.imgForms,
//     txtForms: state.textReducer.txtForms
//   }
// }

export default Board;
// export default withAuth(
//   connect(mapStateToProps, actions)(Board)
// );