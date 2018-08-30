import React from 'react';
import { NavLink } from 'react-router-dom';
import Board from './Board';
import FormOptionContainer from './FormOptionContainer/FormOptionContainer';

export default class RAMContainer extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="container">
          <Board />
          <FormOptionContainer />
        </div>
        {/* <NavLink
          to = "/"
          exact
          className="logout-link"
        >logout</NavLink> */}
      </React.Fragment>
    )
  }
}