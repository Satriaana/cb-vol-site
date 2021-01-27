import React, { Component } from "react";
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from "mdbreact";
import "./header.css";
import ModalApplication from "./application";

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
              <div
                className="align-items-mg-center"
                style={{ paddingTop: "10%" }}
              >
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
                <div className="lead">
                  <ModalApplication />
                </div>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <img
                id="headerImg"
                src="https://firebasestorage.googleapis.com/v0/b/satriaana-resources.appspot.com/o/headerImg.png?alt=media&token=7f1bae22-6308-4144-b321-3bead5e26436"
                className="img-fluid"
                alt="Header"
              />
            </MDBCol>
          </MDBRow>
        </MDBJumbotron>
      </MDBContainer>
    );
  }
}

export default Header;
