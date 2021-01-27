import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

class ModalSignUp extends Component {
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
      <div>
        {/* BUTTON */}
        <MDBBtn
          className="btn-blue bt"
          style={{ borderRadius: "10px", fontWeight: "bold" }}
          onClick={this.toggle}
        >
          Sign Up
        </MDBBtn>
        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>
            <h5 class="modal-title" style={{ fontWeight: "bold" }}>
              Sign Up
            </h5>
          </MDBModalHeader>
          <MDBModalBody>
            <h5 class="text-center">Sign Up is not available</h5>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              className="btn-grey bt"
              style={{ borderRadius: "10px", fontWeight: "bold" }}
              type="button"
              onClick={this.toggle}
            >
              Cancel
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}
export default ModalSignUp;
