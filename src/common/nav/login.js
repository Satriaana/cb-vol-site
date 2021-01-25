import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

class ModalLogin extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div className="loginModal">
        <button
          type="button"
          class="btn btn-link"
          data-mdb-ripple-color="dark"
          onClick={this.toggle}
          style={{ fontWeight: "bold", textDecoration: "none" }}
        >
          Login
        </button>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>
              <h5 style={{ fontWeight: "bold" }}>
                  Sign in
              </h5>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              <MDBCol md="12" className="p-4 text-left">
                <form>
                  <label
                    htmlFor="defaultFormLoginEmailEx"
                    className="grey-text"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="defaultFormLoginEmailEx"
                    className="form-control"
                    placeholder="Your email address"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormLoginPasswordEx"
                    className="grey-text"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="defaultFormLoginPasswordEx"
                    className="form-control"
                    placeholder="Your password"
                  />
                  <div className="text-center mt-4">
                  <MDBBtn
                      className="btn-grey bt"
                      style={{ borderRadius: "10px", fontWeight: "bold" }}
                      type="button"
                      onClick={this.toggle}
                    >
                      Close
                    </MDBBtn>
                    <MDBBtn
                      className="btn-blue bt"
                      style={{ borderRadius: "10px", fontWeight: "bold" }}
                      type="submit"
                    >
                      Log in
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
        </MDBModal>
      </div>
    );
  }
}

export default ModalLogin;
