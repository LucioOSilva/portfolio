import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() { 
    return (
      <section id="home" className="sectionHome">
        <div className="subSectionHome-1">
          <p className="textHome-sml text-yellow">MY NAME IS LUCIO SILVA</p>
          <p className="textHome-big">I Am A FullStack</p>
          <p className="textHome-big">Web Developer</p>
          <p className="textHome-xsml">From Belo Horizonte.</p>
          <button className="btnContact">Contact me</button>
        </div>
        <div className="subSectionHome-2">
          <img alt="mypic" src="./assets/my-pic.png" className="mypic"/>
        </div>
      </section>
    );
  }
}
 
export default Home;