import React from 'react';
import { NavLink } from 'react-router-dom';
import Board from './Board';
import FormOptionContainer from './FormOptionContainer/FormOptionContainer';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import * as actions from '../actions';

class RamCreator extends React.Component {
  constructor() {
    super()

    this.state = {
      boards: [],
      activeBoard: null
    }
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0 //first element gets 1 and uniqueId gets set to 0.
    return this.uniqueId++;
  }

  addBoard() {
    this.boardId = this.boardId || 1
    var newBoardId = this.boardId++
    var boards = [...this.state.boards,
    {
      id: newBoardId,
      title: `Board ${newBoardId}`,
      txtNotes:[],
      imgNotes:[],
      shapeNotes:[]
    }]
    var activeBoard = boards[boards.length-1]
    this.setState({boards, activeBoard})
  }

  deleteBoard(id) {
    if(this.state.boards.length === 1) { return } //always leave one board displayed
    var boards = [...this.state.boards].filter(board => board.id !== id)
    var activeBoard = boards.length === 1 ? boards[0] : boards[boards.length-1]
    this.setState({boards, activeBoard})
  }

  changeBoard(id) {
    this.state.boards.forEach((board) => {
      if(board.id === id) {
        var activeBoard = board
        this.setState({activeBoard})
      }
    })
  }

  onTitleChange(newText, id) {
    var activeBoard = this.state.activeBoard
    activeBoard.title = newText
    this.setState({activeBoard})
  }

  findTxtNote(id) {
    var txtNote
    var txtNotes = [...this.state.activeBoard.txtNotes]
    txtNotes.forEach((note) => {
      if(note.id === id) {
        txtNote = note
      }
    })
    return txtNote
  }

  onAddTxtNote() {
    var activeBoard = this.state.activeBoard
    var txtNotes = [...activeBoard.txtNotes,{
          id: this.nextId(),
          note: '',
          editing: true,
          color: '#db3e00',
          position: {
            x: 160,
            y: 30
          }
        }]
    activeBoard.txtNotes = txtNotes
    this.setState({activeBoard})
  }

  onTxtNoteDrag(e, position, id) {
    var activeBoard = this.state.activeBoard
    var txtNote = this.findTxtNote(id)
    const {x, y} = position
    txtNote.position.x = x
    txtNote.position.y = y
    this.setState({activeBoard})
  }

  onTxtNoteToggle(id){
    var activeBoard = this.state.activeBoard
    var txtNote = this.findTxtNote(id)
    var currentEditState = txtNote.editing 
    txtNote.editing = !currentEditState
    this.setState({activeBoard})
  }

  onTxtNoteSave(note, id){
    var activeBoard = this.state.activeBoard
    var txtNote = this.findTxtNote(id)
    txtNote.note = note
    this.setState({activeBoard})
  }

  onTxtNoteRemove(id){
    var activeBoard = this.state.activeBoard
    var txtNotes = activeBoard.txtNotes.filter(note => note.id !== id)
    activeBoard.txtNotes = txtNotes
    this.setState({activeBoard})
  }

  onColorChange(color, id) {
    var activeBoard = this.state.activeBoard
    var txtNote = this.findTxtNote(id)
    txtNote.color = color
    this.setState({activeBoard})
  }

  findImgNote(id) {
    var imgNote
    var imgNotes = [...this.state.activeBoard.imgNotes]
    imgNotes.forEach((note) => {
      if(note.id === id) {
        imgNote = note
      }
    })
    return imgNote
  }

  onAddImgNote(){
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

  onImgNoteDrag(e, position, id) {
    var activeBoard = this.state.activeBoard
    var imgNote = this.findImgNote(id)
    const {x, y} = position
    imgNote.position.x = x
    imgNote.position.y = y
    this.setState({activeBoard})
  }

  onImgNoteToggle(id){
    var activeBoard = this.state.activeBoard
    var imgNote = this.findImgNote(id)
    var currentEditState = imgNote.editing //simplify
    imgNote.editing = !currentEditState
    this.setState({activeBoard})
  }

  onImgNoteSave(src, id){
    var activeBoard = this.state.activeBoard
    var imgNote = this.findImgNote(id)
    imgNote.src = src
    // imgNote.imgHeight = imgHeight + 'px'
    // imgNote.imgWidth = imgWidth + 'px'
    this.setState({activeBoard})
  }

  onImgNoteRemove(id){
    var activeBoard = this.state.activeBoard
    var imgNotes = activeBoard.imgNotes.filter(note => note.id !== id)
    activeBoard.imgNotes = imgNotes
    this.setState({activeBoard})
  }

  findShapeNote(id) {
    var shapeNote
    var shapeNotes = [...this.state.activeBoard.shapeNotes]
    shapeNotes.forEach((note) => {
      if(note.id === id) {
        shapeNote = note
      }
    })
    return shapeNote
  }

  onAddShapeNote() {
    var activeBoard = this.state.activeBoard
    var shapeNotes = [...activeBoard.shapeNotes,{
          id: this.nextId(),
          editing: true,
          color: '#FF4407',
          position: {
            x: 160,
            y: 30
          },
          shape:'ellipse'
        }]
    activeBoard.shapeNotes = shapeNotes
    this.setState({activeBoard})
  }

  onShapeNoteDrag(e, position, id) {
    var activeBoard = this.state.activeBoard
    var shapeNote = this.findShapeNote(id)
    const {x, y} = position
    shapeNote.position.x = x
    shapeNote.position.y = y
    this.setState({activeBoard})
  }

  onShapeNoteToggle(id){
    var activeBoard = this.state.activeBoard
    var shapeNote = this.findShapeNote(id)
    var currentEditState = shapeNote.editing //simplify
    shapeNote.editing = !currentEditState
    this.setState({activeBoard})
  }

  onShapeNoteRemove(id){
    var activeBoard = this.state.activeBoard
    var shapeNotes = activeBoard.shapeNotes.filter(note => note.id !== id)
    activeBoard.shapeNotes = shapeNotes
    this.setState({activeBoard})
  }

  onShapeNoteSave(shape, id){
    var activeBoard = this.state.activeBoard
    var shapeNote = this.findShapeNote(id)
    shapeNote.shape = shape
    this.setState({activeBoard})
  }



  render(){
    return(
      <div className="ram-container">
        <div className="container">
          <FormOptionContainer 
          activeBoard={this.state.activeBoard}
          addBoard={this.addBoard.bind(this)}
          deleteBoard={this.deleteBoard.bind(this)}
          onAddTxtNote={this.onAddTxtNote.bind(this)}
          onAddImgNote={this.onAddImgNote.bind(this)}
          onAddShapeNote={this.onAddShapeNote.bind(this)}
          />
          <Board
          activeBoard={this.state.activeBoard}
          onTxtNoteDrag={this.onTxtNoteDrag.bind(this)}
          onTxtNoteToggle={this.onTxtNoteToggle.bind(this)}
          onTxtNoteSave={this.onTxtNoteSave.bind(this)}
          onTxtNoteRemove={this.onTxtNoteRemove.bind(this)}
          onColorChange={this.onColorChange.bind(this)}
          onImgNoteDrag={this.onImgNoteDrag.bind(this)}
          onImgNoteToggle={this.onImgNoteToggle.bind(this)}
          onImgNoteSave={this.onImgNoteSave.bind(this)}
          onImgNoteRemove={this.onImgNoteRemove.bind(this)}
          onShapeNoteDrag={this.onShapeNoteDrag.bind(this)}
          onShapeNoteToggle={this.onShapeNoteToggle.bind(this)}
          onShapeNoteSave={this.onShapeNoteSave.bind(this)}
          onShapeNoteRemove={this.onShapeNoteRemove.bind(this)}
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

// const mapStateToProps = (state) => {
//   return {
//     imgForms: state.formReducer.imgForms,
//     txtForms: state.textReducer.txtForms
//   }
// }

// export default withAuth(
//   connect(mapStateToProps, actions)(RamCreator)
// );

export default RamCreator;