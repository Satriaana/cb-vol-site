import React, { Component } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./assets/logo/logo.png";
import "../nav/nav.css";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar light expand="md" style={{boxShadow: "none"}}>
          <MDBContainer>
            <MDBNavbarBrand>
              <img
                src={logo}
                className="img-fluid"
                alt="logo"
                style={{
                  width: "130px",
                }}
              />
            </MDBNavbarBrand>

            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse5" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right className="navb font-weight-bold">
                <MDBNavItem>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Blog</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Forum</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Projects</MDBNavLink>
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
                  <MDBNavLink to="#!" className="p-3">
                    Login
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBBtn
                    className="btn-blue bt"
                    style={{ borderRadius: "10px", fontWeight: "bold" }}
                  >
                    Sign up{" "}
                  </MDBBtn>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
