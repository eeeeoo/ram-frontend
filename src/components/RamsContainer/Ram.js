import React from 'react';
import { connect } from 'react-redux';

const Ram = ({ match, boards }) => {
  console.log(match, boards)
  const id = match.params.id;
  const board = boards.find(board => board.id === parseInt(id, 10));
  const createMarkup = (content) => {
    return {__html: content};
  }
  
  return (
    <div className="ram-container">
      <div className="container">
        <div id="board" className="board">
          <div dangerouslySetInnerHTML={createMarkup(board.content)}/>
        </div>
        <div className="controls">
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({userReducer: {boards}}) => {
  return {
    boards
  }
}

export default connect(mapStateToProps)(Ram);