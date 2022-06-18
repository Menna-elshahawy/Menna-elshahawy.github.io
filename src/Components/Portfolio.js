import React, { Component } from "react";


import AKidKode from './AKidKode.png'; 
import AKidKode_logo from './AKidKode_Logo.png'; 
import Iinteract from './I_Interact.jpg'; 

class Portfolio extends Component {
  render() {
    return (
      <div className = "container" id="portfolio">
            <hr/>
            <h1 className="centered titles">PORTFOLIO</h1>
            <div className="row flex-column-reverse flex-md-row centered">
              <div className="col-md-8 col-sm-10 col-lg-4">
                <img className="portfolio_element shadow" src={AKidKode_logo} alt="Menna Elshahawy Personl Photo"/>
                <h6 className="centered description">AKidKode Unity3D Game: A Serious Game Teaching Coding to children with ASD</h6>
                
              </div>
              <div className="col-md-8 col-sm-10 col-lg-4">
                <img className="portfolio_element shadow" src={AKidKode_logo} alt="Menna Elshahawy Personl Photo"/>
                <h6 className="centered description">AKidKode Website: A Block-Based programming website</h6>
              </div>
              <div className="col-md-8 col-sm-10 col-lg-4">
                <img className="portfolio_element shadow" src={Iinteract} alt="Menna Elshahawy Personl Photo"/>
                <h6 className="centered description">I-Interact: A VR game to improve eye contact for individuals with social impairments</h6>
              </div>
            </div>
          </div>
    );
  }
}
 
export default Portfolio;