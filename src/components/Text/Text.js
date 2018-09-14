import React from 'react';
import Draggable from 'react-draggable';
import './Text.css';
import ColorPicker from '../ColorPicker';

class Text extends React.Component{
  componentDidMount() {
    if (this.props.editing) {
        this.refs.note.focus()
        this.refs.note.select()
    }
  }

  componentDidUpdate() {
    if (this.props.editing) {
        this.refs.note.focus()
        this.refs.note.select()
    }
  }

  edit() {
    this.props.onTxtNoteToggle(this.props.id)
  }

  save() {
    console.log(this.refs.note.value)
    this.props.onTxtNoteSave(this.refs.note.value, this.props.id)
    this.props.onTxtNoteToggle(this.props.id)
  }

  remove() {
    this.props.onTxtNoteRemove(this.props.id)
  }

  drag(e, position) {
    this.props.onTxtNoteDrag(e, position, this.props.id)
  }

  changeColor(color) {
    this.props.onColorChange(color.hex, this.props.id)
  }

  addTextMode(){
    const colors = ['#FF4407', '#F9A600', '#005C35', '#D4D7D0', '#9B9B9B']
    const style = { color: `"${this.props.color}"`}
    return(
      <div className="addText">
        <button className="deleteButton" onClick={() => this.remove()}>X</button>
        <p>add content</p>
        {/* <input ref="note" defaultValue={this.props.note}/> */}
        <textarea style={style} ref="note" defaultValue={this.props.note}></textarea>
        <div className="colorPicker">
          <ColorPicker width='85px' colors={colors} triangle='hide' onChangeComplete={ (color) => this.changeColor(color)}/>
        </div>
        <button className="addButton" onClick={() => this.save()}>+</button>
      </div>
    )
  }

  displayTextMode(){
    const style = { color: this.props.color}
    return(
      <div className="displayText" onDoubleClick={() => this.edit()}>
        <p style={style}>{this.props.note}</p>
      </div>
    )
  }

  render(){
    console.log(this.props.note)
    return(
      <Draggable bounds="parent" position={this.props.position} onDrag={(e, position) => this.drag(e, position)}>
        {(this.props.editing) ? this.addTextMode() : this.displayTextMode()}
      </Draggable>)
    }
}
export default Text;