import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
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
          data-mdb-toggle="modal"
          data-mdb-target="#loginModal"
          style={{ fontWeight: "bold", textDecoration: "none" }}
        >
          Login
        </button>
        <div
          class="modal fade"
          id="loginModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  id="exampleModalLabel"
                  style={{ fontWeight: "bold" }}
                >
                  Sign In
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
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
                          data-mdb-dismiss="modal"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalLogin;
