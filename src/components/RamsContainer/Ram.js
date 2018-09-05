import React from 'react';
import Board from '../Board';
const Ram = () => (
  <div className="ram-container">
    <div className="container">
        <Board />
        <div className="controls">
          <button>edit</button>
          <button>delete</button>
        </div>
    </div>
  </div>
)

export default Ram