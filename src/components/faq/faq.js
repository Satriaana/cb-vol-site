import React, { Component } from "react";
import "./faq.css";

class Faq extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className ="container">
        <br></br>
        <div className ="container">
          <h6 className="text-left">FAQ</h6>
          <h1 className="text-left">Have any questions?</h1>
          <h3>We are here to resolve any questions you may have.</h3>
          <h3>Explore the tabs for most frquent questions.</h3>
        </div>
        <div className="container">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-link active text-capitalize" id="nav-home-tab" data-bs-toggle="tab" href="#nav-general" role="tab" aria-controls="nav-general" aria-selected="true">General</a>
              <a class="nav-link text-capitalize font-weight-bold" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-volunteering" role="tab" aria-controls="nav-volunteering" aria-selected="false">Volunteering</a>
              <a class="nav-link text-capitalize font-weight-bold" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-projects" role="tab" aria-controls="nav-projects" aria-selected="false">Projects</a>
              <a class="nav-link text-capitalize font-weight-bold" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-satriaana" role="tab" aria-controls="nav-satriaana" aria-selected="false">Satriaana</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
          </div>
        </div>
      </div>

      </div>
    )
    
  }
}

export default Faq;
