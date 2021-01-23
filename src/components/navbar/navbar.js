import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBBtn } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './assets/logo/logo.png';
import '../navbar/navbar.css'; 

class NavbarPage extends Component {
state = {
  isOpen: false
};


toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}


render() {
  return (
    
    

    <Router>
      <MDBNavbar  light expand="md" >
        <MDBNavbarBrand>
       
            <img src={logo} className="img-fluid" alt="logo"  style={{
                  width: "130px",
                }} />
            
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse5" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right className="navb font-weight-bold">
            <MDBNavItem >
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Blog</MDBNavLink>
            </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink to="#!">Forum</MDBNavLink>
            </MDBNavItem>  
            <MDBNavItem>
              <MDBNavLink to="#!">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Contact</MDBNavLink>
            </MDBNavItem>       
          </MDBNavbarNav>

          <MDBNavbarNav right className="navb font-weight-bold">
          <MDBNavItem>
              <MDBNavLink  to="#!" className="p-3">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>                        
            <MDBBtn  className="btn-blue bt" style={{borderRadius:"25px",fontWeight:"bold"}}>Sign up </MDBBtn>              
            </MDBNavItem>            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>       
    
       
        </Router>    
  

    );
  }
}

export default NavbarPage;