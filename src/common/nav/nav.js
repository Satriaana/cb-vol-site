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
  MDBDropdown,
  MDBDropdownToggle,
  MDBIcon,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./assets/logo/logo.png";
import "../nav/nav.css";
import ModalLogin from "./login";
import ModalSignUp from "./signup";

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
        <MDBNavbar light expand="md" style={{ boxShadow: "none" }}>
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
              <MDBNavbarNav left className="navb font-weight-bold">
                <MDBNavItem>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Blog</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Forum</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/">Projects</MDBNavLink>
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
                  <ModalLogin />
                </MDBNavItem>
                <MDBNavItem>
                  <ModalSignUp />
                </MDBNavItem>
                <MDBNavItem className="d-none">
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>

                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
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
