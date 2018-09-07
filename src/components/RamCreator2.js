import React from 'react';
import { NavLink } from 'react-router-dom';
import Board from './Board';
import FormOptionContainer from './FormOptionContainer/FormOptionContainer';

export default class RamCreator extends React.Component{
  state = {
    activeBoard: {}
  }

  generateUniqId = () => {
    this.uniqueId = this.uniqueId || 0 
    return this.uniqueId++;
  }

  onTitleChange= (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  findImgForm = (id) => {
    var imgForm
    var imgForms = [...this.state.activeBoard.imgForms]
    imgForms.forEach((img) => {
      if(img.id === id) {
        imgForm = img
      }
    })
    return imgForm
  }

  onAddImgForm = () => {
    var activeBoard = this.state.activeBoard
    var imgForms = [...activeBoard.imgForms,
      {
        id: this.generateUniqId(),
        src: '',
        editing: true,
        imgWidth: null,
        imgHeight: null,
        position: {
          x: 160,
          y: 30
        }
      }]
    activeBoard.imgForms = imgForms
    this.setState({activeBoard})
  }

  onimgFormDrag = (event, position, id) => {
    var activeBoard = this.state.activeBoard
    var imgForm = this.findimgForm(id)
    const {x, y} = position
    imgForm.position.x = x
    imgForm.position.y = y
    this.setState({activeBoard})
  }

  onimgFormToggle = (id) => {
    var activeBoard = this.state.activeBoard
    var imgForm = this.findimgForm(id)
    var currentEditState = imgForm.editing //simplify
    imgForm.editing = !currentEditState
    this.setState({activeBoard})
  }

  onimgFormSave = (src, id, imgWidth, imgHeight) => {
    var activeBoard = this.state.activeBoard
    var imgForm = this.findimgForm(id)
    imgForm.src = src
    imgForm.imgHeight = imgHeight + 'px'
    imgForm.imgWidth = imgWidth + 'px'
    this.setState({activeBoard})
  }

  onimgFormRemove = (id) => {
    var activeBoard = this.state.activeBoard
    var imgForms = activeBoard.imgForms.filter(note => note.id !== id)
    activeBoard.imgForms = imgForms
    this.setState({activeBoard})
  }

  render(){
    return(
      <div className="ram-container">
        <div className="container">
          <Board
          activeBoard={this.state.activeBoard}
          onimgFormDrag={this.onimgFormDrag}
          onimgFormToggle={this.onimgFormToggle}
          onimgFormSave={this.onimgFormSave}
          onimgFormRemove={this.onimgFormRemove}
          />
          <FormOptionContainer 
          activeBoard={this.state.activeBoard}
          onTitleChange={this.onTitleChange}
          />
        </div>
        <NavLink
          to = "/"
          exact
          className="logout-link"
        >logout</NavLink>
      </div>
    )
  }
}