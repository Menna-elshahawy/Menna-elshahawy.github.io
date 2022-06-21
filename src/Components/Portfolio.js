import React, { Component } from "react";


import AKidKode from './AKidKode.png'; 
import AKidKode_logo_Website from './AKidKode_Website.jpg'; 
import AKidKode_logo_SG from './AKidKode_SG.jpg'; 
import Iinteract from './I_Interact.jpg'; 

const tokenlist = [
  {
    logo: AKidKode_logo_SG,
    name: "AKidKode Serious Game",
    description: "AKidKode Unity3D Game: A Serious Game Teaching Coding to children with ASD"
  },
  {
    logo: AKidKode_logo_Website,
    name: "AKidKode Website",
    description: "AKidKode Website: A Block-Based programming website"
  },
  {
    logo: Iinteract,
    name: "I-interact Serious Game",
    description: "I-Interact: A VR game to improve eye contact for individuals with social impairments"
  }
  
];

class Portfolio extends Component {

  render() {
    return (
      <div className = "container" id="portfolio">
            <hr/>
            <h1 className="centered titles">PORTFOLIO</h1>
            <div className="row flex-column-reverse flex-md-row centered">
              {tokenlist && tokenlist.map((a, index) => (
                <div className="col-md-8 col-sm-10 col-lg-4">
                  <img className="portfolio_element shadow" src={a.logo} alt={a.name} />
                 <h6 className="centered description">{a.description}</h6>
                </div>
              ))}
          </div>
        </div>
    );
  }
}
 
export default Portfolio;