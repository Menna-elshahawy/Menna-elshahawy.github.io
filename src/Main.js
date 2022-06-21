import React, { Component } from "react";
// import { Routes, Route, HashRouter} from "react-router-dom";

// import "jquery/dist/jquery"

import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/style.css"


import Navigationbar from "./Components/Navigationbar";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import More from "./Components/Contact";
import Footer from "./Components/Footer";

class Main extends Component {
  render() {
    return (
    <div>        
          <Navigationbar/>
          <Resume/>
          <Portfolio/>
          <More/>
          <Footer/>

    </div>
    );
  }
}
 
export default Main;