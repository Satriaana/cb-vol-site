import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFooter,
} from "mdbreact";
import JoinCard from "./joincard";
import footerLogo from "./assets/satLogoFooter.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <MDBContainer style={{ marginTop: "2em" }}>
        <JoinCard />
        <MDBFooter className="text-center text-lg-left">
          <MDBContainer className="p-4">
            <MDBRow>
              <MDBCol lg="8" md="12" className="mb-4 mb-md-0">
                <img
                  src={footerLogo}
                  className="img-fluid"
                  alt="Satriaana Logo"
                  style={{ width: "80px", marginBottom: "1.4em" }}
                />

                <p id="desc" className="text-dark" style={{ fontSize: "15px" }}>
                  Satriaana is an independent and transparent open-source
                  community and an organization that respects the privacy of
                  people. We aim to filter open-source projects for
                  authenticity, while helping other open-source volunteer
                  startups to rise.
                </p>
              </MDBCol>

              <MDBCol lg="2" md="6" className="align-self-start px-md-5" style={{ fontWeight: "bold", fontSize: "15px" }}>
                <h5 className="text-dark">Get Started</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-dark">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Join Satriaana
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="2" md="6" className="align-self-start px-md-5" style={{ fontWeight: "bold", fontSize: "15px" }}>
                <h5 className="text-dark">Site Map</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-dark">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Contact
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr />
          <div className="p-3">
            <MDBRow>
              <MDBCol lg="9" style={{ fontWeight: "bold", fontSize: "15px" }}>
                <p className="text-dark">
                  &copy; {new Date().getFullYear()}{" "}
                  <a className="text-dark" href="https://satriaana.org">
                    Satriaana. All Rights Reserved.
                  </a>
                </p>
              </MDBCol>
              <MDBCol lg="3">
                <a
                  style={{ color: "black", marginRight: "0.8em" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-facebook-f fa-lg"></i>
                </a>

                <a
                  style={{ color: "black", marginRight: "0.8em" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-twitter fa-lg"></i>
                </a>

                <a
                  style={{ color: "black", marginRight: "0.8em" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-instagram fa-lg"></i>
                </a>

                <a
                  style={{ color: "black", marginRight: "0.8em" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-linkedin fa-lg"></i>
                </a>

                <a
                  style={{ color: "black", marginRight: "0.8em" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-github fa-lg"></i>
                </a>

                <a style={{ color: "black" }} href="#!" role="button">
                  <i class="fab fa-reddit fa-lg"></i>
                </a>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBFooter>
      </MDBContainer>
    );
  }
}

export default Footer;
