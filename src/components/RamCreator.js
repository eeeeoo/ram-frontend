import React from 'react';
import { NavLink } from 'react-router-dom';
import Board from './Board';
import FormOptionContainer from './FormOptionContainer/FormOptionContainer';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import * as actions from '../actions';

class RamCreator extends React.Component {
  render(){
    console.log(this.props.txtForms)
    console.log(this.props.imgForms.find(imgForm=> imgForm.imgForm.id === 1))
    return(
      <div className="ram-container">
        <div className="container">
          <Board
          imgForms = {this.props.imgForms}
          txtForms = {this.props.txtForms}
          />
          <FormOptionContainer 
          imgForms = {this.props.imgForms}
          txtForms = {this.props.txtForms}
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

const mapStateToProps = (state) => {
  return {
    imgForms: state.formReducer.imgForms,
    txtForms: state.textReducer.txtForms
  }
}

export default withAuth(
  connect(mapStateToProps, actions)(RamCreator)
);
