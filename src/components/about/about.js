import React, { Component } from 'react';
import './about.css'
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="about" id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/portfolio/self_img.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <a href={resumeData.website} target="BLANK_">{resumeData.website}</a>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
