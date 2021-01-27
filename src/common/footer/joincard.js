import React from "react";
import { MDBBtn, MDBCol, MDBRow, MDBJumbotron, MDBContainer } from "mdbreact";
import cardImg from "./assets/joincardImg.png";

const JoinCard = () => {
  return (
    <MDBJumbotron style={{ borderRadius: "15px", backgroundColor: "#2962ff" }}>
      {/* <img
        className="img-fluid"
        src={cardImg}
        alt="Join"
        style={{
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      /> */}
      <MDBContainer>
        <MDBRow>
          <MDBCol md="9">
            <h4
              className="display-7 text-white d-flex p-2"
              style={{ fontWeight: "bold" }}
            >
              You can help shape the future of Open Source
            </h4>
          </MDBCol>
          <MDBCol md="3">
            <MDBBtn
              href="#"
              className="btn-white bt"
              style={{
                borderRadius: "10px",
                fontWeight: "bold",
                color: "#2962ff",
                width: "171px",
              }}
            >
              Join Satriaana
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  );
};

export default JoinCard;
