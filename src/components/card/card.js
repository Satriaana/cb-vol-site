import React, { Component } from "react";
import{ MDBContainer,MDBRow,MDBCol, MDBCollapse, MDBCard, MDBCardBody,  MDBIcon } from "mdbreact";
import '../card/card.css';



class CollapsePage extends Component {
state={
  collapseID: "collapse1"
}

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
    return (
      <MDBContainer>
        <MDBContainer className="p-5">
    


          <MDBCard className="bg-white mx-auto " style={{ borderRadius:"15px",width:"80%"}}>
          
          <header onClick={this.toggleCollapse("collapse3")}>
          <MDBRow >
             <MDBCol size="9"> <h4 style={{ margin:"25px",float:"left",fontWeight:"400",}}>How to get started?</h4></MDBCol>
             <MDBCol size="3">
              <MDBIcon 
                icon={ 
                  this.state.collapseID === "collapse3"
                    ? "angle-up"
                    : "angle-down"
                }
                className="black-text fa-2x p-4 float-right"  style={{float:"right"}}
                
              /></MDBCol></MDBRow>
            </header>
          
            <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
              <MDBCardBody className="rgba-light black-text ">
                <hr></hr>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Qui earum tempore aliquam corporis reiciendis eaque tenetur culpa quibusdam hic suscipit fuga rem quos, 
                 blanditiis autem, placeat repellat mollitia. Aliquam, dicta.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default CollapsePage;