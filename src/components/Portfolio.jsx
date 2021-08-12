import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

class Portfolio extends React.Component {
  render() { 
    return (
      <section id="portfolio" className="sectionPortfolio">
        <div className="subSectionPortfolio">
          <Link to="/frontend" className="btnLink">
            <i className="fa fa-desktop fa-3x icon"></i>
            <p className="textPortfolio-title">FrontEnd Projects</p>
          </Link>
        </div>
        <div className="subSectionPortfolio">
          <Link to="/backend" className="btnLink">
            <i className="fa fa-cogs fa-3x icon"></i>
            <p className="textPortfolio-title">BackEnd Projects</p>
          </Link>
        </div>
        <div className="subSectionPortfolio">
          <Link to="/backend" className="btnLink">
            <i className="fa fa-external-link fa-3x icon"></i>
            <p className="textPortfolio-title">Others</p>
          </Link>
        </div>
      </section>
    );
  }
}
 
export default Portfolio;