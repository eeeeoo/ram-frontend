import React from 'react';
import { NavLink } from 'react-router-dom';
import Board from './Board';
import FormOptionContainer from './FormOptionContainer/FormOptionContainer';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { addImageForm, dragForm } from '../actions/form';
class RamCreator extends React.Component {
  render(){
    console.log(this.props.imgForms.find(imgForm=> imgForm.imgForm.id === 1))
    return(
      <div className="ram-container">
        <div className="container">
          <Board
          imgForms = {this.props.imgForms}
          />
          <FormOptionContainer 
          imgForms = {this.props.imgForms}
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
    imgForms: state.formReducer.imgForms
  }
}

export default withAuth(
  connect(mapStateToProps,{addImageForm, dragForm})(RamCreator)
);
