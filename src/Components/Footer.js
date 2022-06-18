import React, { Component } from "react";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Footer extends Component {
  render() {
    return (
    	
		    <div className="mt-5 pt-5 pb-5 footer centered">
		    	<h1 className="footer_name">Menna Elshahawy</h1>
		    	<div>
						<a href="https://www.facebook.com/learnbuildteach/"
	                className="facebook social">
	                <FontAwesomeIcon icon={faFacebook} size="2x" />
	              </a>
	              <a href="https://www.youtube.com/c/jamesqquick"
	                className="youtube social">
	                <FontAwesomeIcon icon={faYoutube} size="2x" />
	              </a>
	            <a href="https://www.instagram.com/learnbuildteach"
	                className="facebook social">
	                <FontAwesomeIcon icon={faLinkedin} size="2x" />
	            </a>
	              <a href="https://www.instagram.com/learnbuildteach"
	                className="instagram social">
	                <FontAwesomeIcon icon={faInstagram} size="2x" />
	            </a>
	         </div>
	         <hr/>
	         <div>
						<p className="arabic_text">.فيه ، الرجاء لا يموت أبدًا. فيه ، المحبة لا تضيع أبدًا </p>
					</div>
				</div>
    );
  }
}

export default Footer;