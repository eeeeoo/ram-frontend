import React from 'react';
import { NavLink } from 'react-router-dom';
import Board from './Board';
import FormOptionContainer from './FormOptionContainer/FormOptionContainer';

export default class RamCreator extends React.Component{
  state = {
    activeBoard: null
  }

  addBoard() {
    var activeBoardContent = [...this.state.activeBoard,
    {
      id: 6,
      title: "Board 6",
      content: "",
      txtNotes:[],
      imgNotes:[],
      sketchNotes:[]
    }]
    this.setState({activeBoard:activeBoardContent })
  }

  onTitleChange= (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  findImgNote = (id) => {
    var imgNote
    var imgNotes = [...this.state.activeBoard.imgNotes]
    imgNotes.forEach((note) => {
      if(note.id === id) {
        imgNote = note
      }
    })
    return imgNote
  }

  onAddImgNote = () => {
    var activeBoard = this.state.activeBoard
    var imgNotes = [...activeBoard.imgNotes,
      {
        id: this.nextId(),
        src: '',
        editing: true,
        imgWidth: null,
        imgHeight: null,
        position: {
          x: 160,
          y: 30
        }
      }]
    activeBoard.imgNotes = imgNotes
    this.setState({activeBoard})
  }

  onImgNoteDrag = (event, position, id) => {
    var activeBoard = this.state.activeBoard
    var imgNote = this.findImgNote(id)
    const {x, y} = position
    imgNote.position.x = x
    imgNote.position.y = y
    this.setState({activeBoard})
  }

  onImgNoteToggle = (id) => {
    var activeBoard = this.state.activeBoard
    var imgNote = this.findImgNote(id)
    var currentEditState = imgNote.editing //simplify
    imgNote.editing = !currentEditState
    this.setState({activeBoard})
  }

  onImgNoteSave = (src, id, imgWidth, imgHeight) => {
    var activeBoard = this.state.activeBoard
    var imgNote = this.findImgNote(id)
    imgNote.src = src
    imgNote.imgHeight = imgHeight + 'px'
    imgNote.imgWidth = imgWidth + 'px'
    this.setState({activeBoard})
  }

  onImgNoteRemove = (id) => {
    var activeBoard = this.state.activeBoard
    var imgNotes = activeBoard.imgNotes.filter(note => note.id !== id)
    activeBoard.imgNotes = imgNotes
    this.setState({activeBoard})
  }

  render(){
    return(
      <div className="ram-container">
        <div className="container">
          <Board
          activeBoard={this.state.activeBoard}
          onImgNoteDrag={this.onImgNoteDrag}
          onImgNoteToggle={this.onImgNoteToggle}
          onImgNoteSave={this.onImgNoteSave}
          onImgNoteRemove={this.onImgNoteRemove}
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