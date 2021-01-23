import React, { Component } from "react";
import "./section.css";

class Section extends Component {
  state = {};
  render() {
    return(
      <div class="card container mt-5">
        <div class="card-body">
          <b class="float-start">
            How to sign up on projects platform?
          </b>
          <i class="fas fa-plus float-end"></i>
        </div>
        <div class="card-body">
          <b class="float-start">
            Do I have to be signed in order to sign up for projects?
          </b>
          <i class="fas fa-plus float-end"></i>
        </div>
      </div>
    ) 
  }
}

export default Section;
