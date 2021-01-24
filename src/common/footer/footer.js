import React, { Component } from "react";
import { MDBContainer, MDBJumbotron, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import JoinCard from "./joincard";

class Footer extends Component {
  state = {};
  render() {
    return (
      <MDBContainer style={{marginTop: "2em"}}>
        <JoinCard />
      </MDBContainer>
    );
  }
}

export default Footer;
