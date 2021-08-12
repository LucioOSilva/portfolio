import React from 'react';
import './Portfolio.css';


class Portfolio extends React.Component {
  render() { 
    return (
      <section id="portfolio" className="sectionPortfolio">
        <div className="subSectionPortfolio">
          <i className="fa fa-desktop fa-3x icon"></i>
          <p className="textPortfolio-title">FrontEnd Projects</p>
        </div>
        <div className="subSectionPortfolio">
          <i className="fa fa-cogs fa-3x icon"></i>
          <p className="textPortfolio-title">BackEnd Projects</p>
        </div>
        <div className="subSectionPortfolio">
          <i className="fa fa-external-link fa-3x icon"></i>
          <p className="textPortfolio-title">Others</p>
        </div>
      </section>
    );
  }
}
 
export default Portfolio;