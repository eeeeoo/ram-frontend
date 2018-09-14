import React from 'react';
import Draggable from 'react-draggable';
import './Shape.css'
// export default function ellipse (p) {
//   p.setup = function () {
//     p.createCanvas(100, 100);
//     p.background(255);
//     p.fill(249, 166, 0)
//   };

//   p.draw = function () {
//     p.rect(0,0,100,100);
//   };
// };

export default class Ellipse extends React.Component{
  // componentDidMount() {
  //   if (this.props.editing) {
  //       this.refs.shape.focus()
  //       this.refs.shape.select()
  //   }
  // }

  // componentDidUpdate() {
  //   if (this.props.editing) {
  //       this.refs.shape.focus()
  //       this.refs.shape.select()
  //   }
  // }

  edit() {
    this.props.onShapeNoteToggle(this.props.id)
  }

  save() {
    this.props.onShapeNoteSave(this.refs.shape.value, this.props.id)
    this.props.onShapeNoteToggle(this.props.id)
  }

  remove() {
    this.props.onShapeNoteRemove(this.props.id)
  }

  drag(e, position) {
    this.props.onShapeNoteDrag(e, position, this.props.id)
  }
  
  addShapeMode(){                                   
    return (
      <div className="addImage">
        <strong className="cursor">
        <button className="deleteButton" onClick={() => this.remove()}>X</button>
        <p>add shape</p>
        <select ref="shape" name="shape" defaultValue={this.props.shape} className="shape-options">
          <option value="ellipse">ellipse</option>
          {/* <option value="rectangle">rectangle</option> */}
        </select>
        
        <button className="addButton" onClick={() => this.save()}>+</button>
        </strong>
      </div>  
    )
  }

  displayShapeMode(){
    var { src, imgHeight, imgWidth } = this.props
    return (
      <div className="displayImage" onDoubleClick={() => this.edit()}>
        <strong className="cursor">
          <div className="drag-bar">
            <span id="dot" className="dot" style={{
          height: '100px',
          width: '100px',
          backgroundColor: '#F9A600',
          borderRadius: '50%',
          display: 'inline-block',
        }}></span>
          </div>
        </strong>
      </div>
    )
  }

  render(){
    return(
      <Draggable handle='strong' bounds="parent" position={this.props.position} onDrag={(e, position) => this.drag(e, position)}>
      {(this.props.editing) ? this.addShapeMode() : this.displayShapeMode()}
      </Draggable>
        
    )
  }
}