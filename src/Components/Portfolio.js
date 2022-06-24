import React, { Component } from "react";
import ReactModal from "react-modal";
import MyModalComponent from './bootstrap-modal.component';

import AKidKode from './AKidKode.png'; 
import AKidKode_logo_Website from './AKidKode_Website.jpg'; 
import AKidKode_logo_SG from './AKidKode_SG.jpg'; 
import Iinteract from './I_Interact.jpg'; 

const projects_list = [
  {
    id:1,
    logo: AKidKode_logo_SG,
    name: "AKidKode Serious Game",
    description: "AKidKode Unity3D Game: A Serious Game Teaching Coding to children with ASD",
    video_url: "https://www.youtube.com/embed/qlzR9ghEibI",
    description_elaborate: "AkidKode is a serious game that was created as a master's project at the German University in Cairo for teaching children with autism the basic programming concepts. The game has 3 difficulty levels; Easy, Medium, and Hard. Each of those difficulty levels has multiple levels that cover the three main programming concepts; Sequential, Conditional, and Iterations. The game was created following the UI design guidelines found in the literature, and based on experts opinions from different local institutes, including, Hope Academy for special needs (https://www.hopeacademyegypt.com/), Caritas Egypt (https://caritas-egypt.org/en/) and Advance Society."
  },
  {
    id:2,
    logo: AKidKode_logo_Website,
    name: "AKidKode Website",
    description: "AKidKode Website: A Block-Based programming website",
    video_url: "https://www.youtube.com/embed/5ByPiGZBwdA",
    description_elaborate:"AkidKode is a serious game that was created as a master's project at the German University in Cairo for teaching children with autism the basic programming concepts. The game has 3 difficulty levels; Easy, Medium, and Hard. Each of those difficulty levels has multiple levels that cover the three main programming concepts; Sequential, Conditional, and Iterations. The game was created following the UI design guidelines found in the literature, and based on experts opinions from different local institutes, including, Hope Academy for special needs (https://www.hopeacademyegypt.com/), Caritas Egypt (https://caritas-egypt.org/en/) and Advance Society."

  },
  {
    id:3,
    logo: Iinteract,
    name: "I-interact Serious Game",
    description: "I-Interact: A VR game to improve eye contact for individuals with social impairments",
    video_url: "https://www.youtube.com/embed/BzurANMZVe0",
    description_elaborate:"I-interact is a VR serious game that was created as a bachelor's project at the German University in Cairo. The game aims to ease the social interaction challenges that children face. The game has 3 levels each of which teaches children something about eye contact. The game was created following the UI design guidelines found in the literature, and based on experts opinions from different local institutes to best suit the target audience."

  }

];


class Portfolio extends Component {
  constructor (props) {
    super(props);

    this.state = {
      show: false,
      title: '',
      body: '',
      video_url: '',
      description_elaborate:''
    };
  };
  
  handleShow = (item) => {
    this.setState({
          show: true,
          title: item.name,
          body: item.description,
          video_url: item.video_url,
          description_elaborate:item.description_elaborate
        });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div className = "container" id="portfolio">
            <hr/>

            <h1 className="centered titles">PORTFOLIO</h1>
            <div className="row flex-column-reverse flex-md-row centered">
              {projects_list && projects_list.map((a, index) => (
                <div className="col-md-8 col-sm-10 col-lg-4" key={index}>
                  <img className="portfolio_element shadow" src={a.logo} alt={a.name} onClick={() => this.handleShow(a)} />
                   <h6 className="centered description">{a.description}</h6>
                </div>
              ))}
             </div>

            <MyModalComponent
              show={this.state.show}
              title={this.state.title}
              body={this.state.body}
              video_url={this.state.video_url}
              description_elaborate={this.state.description_elaborate}
              onClick={this.handleClose}
              onHide={this.handleClose} />
        </div>
    );
  }
}
 
export default Portfolio;