import React from 'react';
import './About.css';
export default class About extends React.Component{
  render(){
    return(
      <div className="about">
        {/* <div className="container"> */}
          <p className="outline">random access memories</p>
          {/* <p className="reverse-outline">memories</p> */}
        {/* </div> */}
        <div className="container">
          <p className="outline">dieter</p>
          <p className="reverse-outline">rams</p>
        </div>
        <p className="outline">visual studio notes</p>
      </div>
    )
  }
}