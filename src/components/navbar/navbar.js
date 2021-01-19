import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
, MDBJumbotron, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './assets/logo/logo.png';
import head from './assets/logo/headerImg.png';
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
            <MDBBtn  className="btn-blue bt" style={{borderRadius:"25px"}}>Sign up </MDBBtn>              
            </MDBNavItem>            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
     
      
      
        
    
        <MDBJumbotron className="jumbo" >
          <MDBRow>
            <MDBCol  sm="5" md="5" lg="5" >          
            <h1 className=" tx text-white" style={{fontWeight:"bold"}} >
              Find a project that interests you.</h1>
              <h3 className="text-white" style={{fontWeight:"bold"}} >
              Assign youeself</h3>
            <h4 className="text-white ">
            Get the most out of being a volunteer at Satriaana
          </h4>
          <p className="lead ">
            <MDBBtn  className=" btn-blue bt " style={{borderRadius:"20px"}}>Explore Projects</MDBBtn>
          </p>
          </MDBCol>
          <MDBCol  sm="7" md="7" lg="7">
                  <img src={head} className="img-fluid " alt="Header " />
          </MDBCol>
          </MDBRow>
        </MDBJumbotron>  
        </Router>    
  

    );
  }
}

export default NavbarPage;