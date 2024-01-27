import React, { Component } from "react";
import PersonalPhoto from './Menna.jpg';
import ResumePDF from './resume.pdf'; 

class Resume extends Component {
  render() {
    return (

    <div className="container_resume" id="resume">
      <div className="leftpane">

          <img className= "personal_photo" src={PersonalPhoto} alt="Menna Elshahawy"/>

      </div>

      <div className="middlepane">
          <h1 className="resume_name">Menna Elshahawy <a className="btn btn-primary me-2" href={ResumePDF} Download="Menna_Elshahawy_CV.pdf" target="_blank" rel="noreferrer" role="button">Download PDF version <i className="fas fa-download"></i></a></h1>


          <p>I am a graduate from the German University in Cairo (GUC),
           Department of Computer Science and Engineering. 
           I got my master's degree in 2021 in the field of assistive technology, game-based learning and HCI. 
           I have a confident command over Unity3D, C#, Java, SQL, VR/AR technologies.</p>
           <hr/>

          <h1 className = "sections_titles" >EXPERIENCE</h1>
          <div>
          
              <div>
                <h4 className = "resume_positions">Teaching Assistant & Researcher</h4>
                <h5 className = "locations">German university in Cairo </h5>
                <ul>
                  <li>Assisted in coordinating, preparing material and teaching a game development course.</li>
                  <li>Taught different courses, including compiler, microprocessors and computer system architecture.</li>
                  <li>Supervised multiple bachelor projects for undergraduate students.</li>
                  <li>Published several papers in the field of computer science education for individuals with learning disabilities.</li>
                </ul>
              </div>
              <div>
                <h4 className = "resume_positions">Assistant Lecturer</h4>
                <h5 className = "locations">German International University, Berlin, Germany  </h5>
                <ul>
                  <li>Worked as a teahing assistant in the department of Computer Science in the German International University in Berlin.</li>
                  <li>Taught several couses including microprocessors and Unity3D Lab.</li>
                  </ul>
              </div>
              <div>
                <h4 className = "resume_positions">Workshop Lead</h4>
                <h5 className = "locations">German International University, Egypt  </h5>
                <p>
                Conducted a game development workshop for 1st year college students.

                </p>

              </div>
              <div>
                <h4 className = "resume_positions"> K4k Teaching Assistant</h4>
                <h5 className = "locations">German International University, Egypt</h5>
                <ul>
                  <li>Prepared activities for a group of children, aged 6 to 8 years old, to introduce basic programming concepts, using ScratchJr.
                  </li>
                  <li>Assisted in planning and executing daily indoors and outdoors activities for children.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className = "resume_positions">Part time Developer - Summer Intern</h4>
                <h5 className = "locations">Simon-Kucher & Partners</h5>

                <ul>
                  <li>Participated in a two months, 3 days per week internship.</li>
                  <li>Assisted the developers’ team in developing and building a bank website using Ngrx and Angular.</li>
                </ul>
              </div>
              <div>
                <h4 className = "resume_positions">Computer Science junior teaching assistant</h4>
                <h5 className = "locations">German International University, Egypt</h5>

                <p>Assisted multiple groups of students in the Data Structures and Algorithms practical lab.</p>
              </div>
              <div>
                <h4 className = "resume_positions">Summer Intern</h4>
                <h5 className = "locations">Pixel Information Systems - PixelSoft</h5>
                <ul>
                  <li>Participated in a one month internship.</li>
                  <li>Got exposed to technologies including: Oracle SQL, PL/SQL, and JEE.</li>
                </ul>
              </div>
         
          </div>
          <hr/>
          <h1 className = "sections_titles"> EDUCATION </h1>
            <div>
              <h4 className = "resume_positions">MS in Computer Science and Engineering, 2021</h4>
                <h5 className = "locations">German university in Cairo</h5>
                <ul>
                  <li>Assistive computing, game based learning and human-computer interaction.
                  </li>
                  <li>Implemented a block-based programming platform and a serious game to develop computational thinking for children with autism, conducted a comparison between those educational means.
                  </li>
                </ul>
              </div>
              
              <div>
              <h4 className = "resume_positions">BS in Computer Science and Engineering, 2018</h4>
                <h5 className = "locations">German university in Cairo</h5>
                <ul>
                  <li>Assistive computing, game based learning and human-computer interaction.
                  </li>
                  <li>Implemented and tested a VR serious game to help autistic children to maintain eye contact during social interactions using Unity native VR plugin and C# scripting.
                  </li>
                </ul>
              </div>

          <hr/>
          <h1 className = "sections_titles" >PUBLICATIONS </h1>
          <div>
            <h4 className = "resume_positions">Codaroutine: A serious game for introducing 
            sequential programming concepts to children with autism<a href="https://ieeexplore.ieee.org/abstract/document/9125196" target="_blank" rel="noreferrer" className="icon"> </a></h4>
            <h5 className = "locations">2020 IEEE Global Engineering Education Conference (EDUCON)</h5>
            <p>Problem solving, analyzing the validity of a solution and spotting patterns in data are all substantial skills needed in the workplace nowadays not only in the programming field. Solving and generating multiple solutions to a problem is quite challenging for children with autism spectrum disorders. As a solution, the work in this paper presents the design, implementation and the evaluation of a serious game that focuses on the sequential programming concepts.
             The presented game aims to teach problem solving skills to children with autism.
             A user-study was conducted to evaluate the game with children who have autism. 
            According to the evaluation carried out in this research, the game was proven to be engaging, which indicates that the serious game is promising for teaching sequential programming concepts to children with autism.
            </p>
            <p className="dates">27-30 April 2020</p>





            <h4 className = "resume_positions">Developing Computational Thinking for Children with Autism using a Serious Game <a href="https://ieeexplore.ieee.org/abstract/document/9373147" target="_blank" rel="noreferrer" className="icon"> </a></h4>
            <h5 className = "locations">2020 24th International Conference Information Visualisation (IV)</h5>
            <p>Autism Spectrum Disorder (ASD) refers to a group of life-long conditions that are characterized by qualitative impairments in social interactions, problem solving and constructive skills. Children with learning disabilities such as autism face challenges in generating suitable and optimal solutions to problems. Those challenges can severely affect their interactions with others. Thus, teaching children with ASD problem solving and computational thinking skills could help them resolve conflicts that may happen in their everyday life. Effective problem solving is critical for their academic and social success and since one of the most effective tools for teaching children with autism is through using visual aids, the work in this paper reports the design and implementation of a serious game that aims at cultivating problem solving skills and teaching programming concepts to children with ASD. The presented game is suitable for children 7 to 14 years of age diagnosed with ASD to learn programming concepts. The preliminary prototype for the game gained positive responses from experts and 12 children with ASD from Caritas Egypt association and Hope Academy.
            </p>
            <p className="dates">07-11 September 2020</p>

            
            <h4 className = "resume_positions">I-interact: A virtual reality serious game for eye contact improvement for children with social impairment <a href="https://link.springer.com/chapter/10.1007/978-3-319-70111-0_14" target="_blank" rel="noreferrer" className="icon"> </a></h4>
            <h5 className = "locations">2020 24th International Conference Information Visualisation (IV)</h5>
            <p>Eye contact is among the most substantial yet underrated non-verbal social communicative behaviors. Establishing and maintaining eye contact is quite challenging for children affected by social impairment. As a solution, we propose a virtual reality serious game to help improve eye gaze abilities for these children and facilitate the transfer of the acquired skills to real-world social interactions. The project comprised of the design, implementation and evaluation of a three levels game that emphasizes on different aspects of eye contact. According to the evaluation carried out in this research, a virtual reality gaming context is a promising strategy for gaze development of children with social deficiencies.
            </p>
            <p className="dates">07 November 2017</p>


          </div>

          </div>



        </div>
    );
  }
}
 
export default Resume;