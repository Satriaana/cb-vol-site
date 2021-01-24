import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, /*MDBCardImage,*/ MDBRow, MDBCol, } from 'mdbreact';
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return ( 
    
      <MDBCard className="card" style={{ borderRadius:"18px"}}>
        
      <MDBCardBody>
        <MDBRow>
        <MDBCol sm="5" md="5" lg="5">
        <h1 className=" tx1 " style={{fontWeight:"bold"}} > You can help </h1>
        <h1 className=" tx2 " style={{fontWeight:"bold"}} > shape the Future of </h1>
        <h1 className=" tx3 " style={{fontWeight:"bold"}} > Open Source </h1> 
            
        
        </MDBCol>
        
             <MDBBtn  className=" btn "  href="#" style={{borderRadius:"8px",fontWeight:"bold"}}><h6>Join Satriaana</h6></MDBBtn>
       
       </MDBRow>
      </MDBCardBody>
    </MDBCard>)
  }
}

export default Footer;
