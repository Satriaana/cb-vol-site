import React, { Component } from "react";
import {  MDBJumbotron, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import head from './assets/logo/headerImg.png';
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
<MDBJumbotron className="jumbo" style={{borderRadius:"18px"}} >
          <MDBRow>
            <MDBCol  sm="5" md="5" lg="5" >          
            <h1 className=" tx text-white" style={{fontWeight:"bold"}} >
              Find a project that interests you.</h1>
              <h3 className="text-white" style={{fontWeight:"bold"}} >
              Assign yourself</h3>
            <h4 className="text-white ">
            Get the most out of being a volunteer at Satriaana
          </h4>
          <p className="lead ">
            <MDBBtn  className=" btn-blue bt " style={{borderRadius:"20px",fontWeight:"bold"}}>Explore Projects</MDBBtn>
          </p>
          </MDBCol>
          <MDBCol  sm="7" md="7" lg="7">
                  <img src={head} className="img-fluid " alt="Header " />
          </MDBCol>
          </MDBRow>
        </MDBJumbotron>  

    );
  }
}

export default Header;
