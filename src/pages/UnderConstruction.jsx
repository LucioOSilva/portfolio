import React from 'react';
import constructionImg from '../assets/underConstruction.png';
import Footer from '../components/Footer';
import './UnderConstruction.css';

class UnderConstruction extends React.Component {
  render() { 
    return (
      <div className="page">
        <div className="titlebox">
          <h1>This page is under construction</h1>
          <h3>Hope you comeback soon!</h3>
        </div>
        <div className="imagebox">
          <img alt="mypic" src={constructionImg} className="image"/>
        </div>
        <Footer/>
      </div>
    );
  }
}
 
export default UnderConstruction;