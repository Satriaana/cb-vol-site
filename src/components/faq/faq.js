import React, { Component } from "react";
import "./faq.css";
import Pills from "./pills";

class Faq extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container" style={{ textAlign: "left" }}>
          <br></br>
          <div className="container">
            <h6 className="text-left" style={{ color: "orange" }}>
              FAQ
            </h6>
            <h2 className="text-left" style={{ fontWeight: "bold" }}>
              Have any questions?
            </h2>
            <h4>We are here to resolve any questions you may have.</h4>
            <h4>Explore the tabs for most frquent questions.</h4>
          </div>
          <div className="container">
            <Pills />
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
