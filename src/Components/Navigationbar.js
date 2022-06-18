import React, { Component } from "react";

class Navigationbar extends Component {

    render(){
        return (
            <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
              <a className="navbar-brand my_name" href="#">Menna Elshahawy</a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">RESUME</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">PORTFOLIO</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#more">MORE ABOUT ME</a>
                  </li>
                </ul>
              </div>
            </nav>
        );
    }
}
 
export default Navigationbar;