import React from 'react';
import './Image.css';

import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';
import * as actions from '../../actions';

class Image extends React.Component{
  componentDidMount() {
    this.refs.src.focus()
    this.refs.src.select()
  }

  componentDidUpdate() {
    this.refs.src.focus()
    this.refs.src.select()
  }

  // state = {
  //   src: ""
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     src: event.target.value
  //   })
  // }

  handleClick = (event) => {
    console.log(this.refs.src.value)
    // this.props.addImageForm(this.refs.src.value)
  }
  
  addImageMode(){                                   
    return (
      <div className="addImage">
        <button className="deleteButton">X</button>
        <p>add image url</p>
        <input ref="src" defaultValue={this.props.src} onChange={this.handleChange}/>
        <button className="addButton" onClick={this.handleClick}>+</button>
      </div>  
    )
  }

  displayImageMode(){
    return (
      <div className="displayImage">
        <button className="deleteButton">X</button>
        <img name="src" style={{height:'150px', width:'150px'}} src="" alt=""/>
      </div>
    )
  }

  render(){
    console.log(this.props.id)
    return(
      // <Draggable
// handle=".handle"
// position={this.props.position}
// onStart={this.handleStart}
// onDrag={this.handleDrag}
// onStop={this.handleStop}
// >
      <div className="handle">{this.addImageMode()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imgForms: state.formReducer.imgForms
  }
}

export default withAuth(
  connect(mapStateToProps, actions)(Image)
);

// <Draggable
// handle=".handle"
// position={this.props.position}
// onStart={this.handleStart}
// onDrag={this.handleDrag}
// onStop={this.handleStop}
// >
//   <div className="handle">{this.addImageMode()}</div>
// </Draggable>