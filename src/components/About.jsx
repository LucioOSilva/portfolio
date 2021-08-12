import React from 'react';
import './About.css';


class About extends React.Component {
  render() { 
    return (
      <section id="about" className="sectionAbout">
        <div className="subSectionAbout">
          <p className="textAbout-sml">A little about myself.</p>
          <p>I am a software development student at Trybe, finishing in Nov/21.</p>
          <p>I have a degree in civil engineering, and I come from a career transition to technology,</p>
          <p>my main programming skills are Node JS and React and also some test libraries.</p>
        </div>
      </section>
    );
  }
}
 
export default About;