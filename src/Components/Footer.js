import React, { Component } from "react";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,

} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Footer extends Component {
  render() {
    return (
    	
		    <div className="mt-5 pt-5 pb-5 footer centered">
		    	<h1 className="footer_name">Menna Elshahawy</h1>
		    	<div>
						<a href="https://www.facebook.com/menna.elshahawy95/" target="_blank"
	                className="facebook social">
	                <FontAwesomeIcon icon={faFacebook} size="2x" />
	              </a>
	              <a href="https://www.youtube.com/channel/UC-0njRKg2ODD766T7LP6tdQ" target="_blank"
	                className="youtube social">
	                <FontAwesomeIcon icon={faYoutube} size="2x" />
	              </a>
	            <a href="https://www.linkedin.com/in/menna-elshahawy/" target="_blank"
	                className="facebook social">
	                <FontAwesomeIcon icon={faLinkedin} size="2x" />
	            </a>
	              <a href="https://www.instagram.com/menna_elshahawy/" target="_blank"
	                className="instagram social">
	                <FontAwesomeIcon icon={faInstagram} size="2x" />
	            </a>
	            <a href="https://github.com/Menna-elshahawy/" target="_blank"
	                className="instagram social">
	                <FontAwesomeIcon icon={faGithub} size="2x" />
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