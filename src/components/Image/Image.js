import React from 'react';
import './Image.css';
import Draggable from 'react-draggable';


class Image extends React.Component{
  componentDidMount() {
    if (this.props.editing) {
        this.refs.src.focus()
        this.refs.src.select()
    }
  }

  componentDidUpdate() {
    if (this.props.editing) {
        this.refs.src.focus()
        this.refs.src.select()
    }
  }

  edit() {
    this.props.onImgNoteToggle(this.props.id)
  }

  save() {
    this.props.onImgNoteSave(this.refs.src.value, this.props.id)
    this.props.onImgNoteToggle(this.props.id)
  }

  remove() {
    this.props.onImgNoteRemove(this.props.id)
  }

  drag(e, position) {
    this.props.onImgNoteDrag(e, position, this.props.id)
  }
  
  addImageMode(){                                   
    return (
      <div className="addImage">
        <strong className="cursor">
        <button className="deleteButton" onClick={() => this.remove()}>X</button>
        <p>add image url</p>
        <input ref="src" defaultValue={this.props.src}/>
        <button className="addButton" onClick={() => this.save()}>+</button>
        </strong>
      </div>  
    )
  }

  displayImageMode(){
    var { src, imgHeight, imgWidth } = this.props
    return (
      <div className="displayImage" onDoubleClick={() => this.edit()}>
        <strong className="cursor">
          <div className="drag-bar">
            {/* <button className="deleteButton" onClick={() => this.remove()}>X</button> */}
            <img className="nonDraggableImage" style={{height:'150px',width:'150px' }} src={this.props.src} height={imgHeight} width={imgWidth} alt=""/>
          </div>
        </strong>
      </div>
    )
  }

  render(){
    return(
      <Draggable handle='strong' bounds="parent" position={this.props.position} onDrag={(e, position) => this.drag(e, position)}>
      {(this.props.editing) ? this.addImageMode() : this.displayImageMode()}
      </Draggable>
    )
  }
}

export default Image;