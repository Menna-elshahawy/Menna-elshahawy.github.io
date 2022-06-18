import React, { Component } from "react";
import PersonalPhoto from './Menna.jpg'; 

class More extends Component {
  render() {
    return (
      <div className="container"id="more">
      <hr/>
        <h1 className="centered titles">MORE ABOUT ME</h1>
      <div className="container_resume">
          <div className="leftpane">

            <img className= "personal_photo" src={PersonalPhoto} alt="Menna Elshahawy"/>
            
        </div>

          <div className="middlepane">
              <p>
              I have a passion for technology and helping others. 

              Back in my bachelor year, I knew I wanted to try and improve people's lives and I also love technology, so I thought of a way to have both. I chose to work on a project to help children with autism ease their social challenges, and since then I was in love with that experience. So I did it again during my master's, I decided to dig deeper, and I explored multiple technologies and approaches to help them land jobs in the future. 
              </p><p>
              I also published my related research in several conferences in the past few years to give others the chance to continue. I would not have done it without the magnificent work of my students, whom I love. That taught me how to work in a team. Along with that, I have been working as a teaching assistant and researcher in the faculty of Computer Science and Engineering in the German University in Cairo for the past 3 years. Those years taught me more things that I have ever taught. During that journey, I also went through multiple part time internships in web and game development. This has led me to appreciate using technology for improving lives more. 
              </p><p>

              Oh, and in my spare time, I love to create art. I love to knit and crochet. My ideal day involves crocheting because it is somehow theraputic for me. And this section would not be purrrfect without mentioning that I love cats and I have two of them who earned their way up here for being damn cute. 
              </p>
              
          </div>

      </div>
      </div>

    );
  }
}
 
export default More;