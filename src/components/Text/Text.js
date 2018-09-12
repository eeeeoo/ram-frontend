import React from 'react';
import Draggable from 'react-draggable';
import './Text.css'
import * as actions from '../../actions';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';
class Text extends React.Component{
  componentDidMount() {
    this.refs.content.focus()
    this.refs.content.select()
  }

  componentDidUpdate() {
    this.refs.content.focus()
    this.refs.content.select()
  }

  handleClick = (event) => {
    console.log(event.target.id)
    this.props.addTextContent(this.refs.content.value, 1)
  }

  addTextMode(){
    return(
      <div className="addText">
        <button className="deleteButton">X</button>
        <p>add content</p>
        <textarea ref="content"></textarea>
        <button className="addButton" onClick={this.handleClick}>+</button>
      </div>
    )
  }

  displayTextMode(){
    return(
      <div className="displayImage">
        <button className="deleteButton">X</button>
      </div>
    )
  }

  render(){
    console.log(this.props.txtForms)
    return(
      <div>
      {this.addTextMode()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    txtForms: state.textReducer.txtForms
  }
}

export default withAuth(
  connect(mapStateToProps, actions)(Text)
);