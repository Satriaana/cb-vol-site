import React, { Component } from "react";
import { MDBContainer, MDBJumbotron, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import head from "./assets/logo/headerImg.png";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <MDBContainer>
        <MDBJumbotron
          className="jumbo"
          style={{ borderRadius: "10px", height: "450px" }}
        >
          <MDBRow className="p-4">
            <MDBCol md="6">
              <div className="align-items-mg-center" style={{paddingTop: "10%"}}>
                <h3
                  className="display-7 text-white"
                  style={{ fontWeight: "bold" }}
                >
                  Find a project of your choice.
                </h3>
                <h3
                  className="display-7 text-white"
                  style={{ fontWeight: "bold" }}
                >
                  Assign yourself.
                </h3>
                <h4 className="lead text-white">
                  Get the most out of being a volunteer at Satriaana
                </h4>
                <p className="lead">
                  <MDBBtn
                    className="btn-blue bt"
                    style={{ borderRadius: "10px", fontWeight: "bold" }}
                  >
                    Apply for Project Positions
                  </MDBBtn>
                </p>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <img id="headerImg" src={head} className="img-fluid" alt="Header" />
            </MDBCol>
          </MDBRow>
        </MDBJumbotron>
      </MDBContainer>
    );
  }
}

export default Header;
