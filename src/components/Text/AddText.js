import React from 'react';
import { connect } from 'react-redux';
import './Text.css'
import * as actions from '../../actions';
import withAuth from '../../hocs/withAuth';

const AddText = (props)=> {
  const handleClick = () => {
    console.log(props.id)
    props.addTextContent(this.refs.content.value, 1)
  }

  return(
    <div className="addText">
      <button className="deleteButton">X</button>
      <p>add content</p>
      <textarea ref="content"></textarea>
      <button className="addButton" onClick={handleClick}>+</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    txtForms: state.textReducer.txtForms
  }
}

export default withAuth(
  connect(mapStateToProps, actions)(AddText)
);