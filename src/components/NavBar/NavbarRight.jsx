import React from 'react';
import './NavbarRight.css';

class NavRight extends React.Component {
  render() {
    const { setShowBurguerMenu } = this.props;
    return (
        <ul id="myLinks" >
          <li><a href="#home" onClick={ setShowBurguerMenu }>Home</a></li>
          <li><a href="#about" onClick={ setShowBurguerMenu }>About</a></li>
          <li><a href="#portfolio" onClick={ setShowBurguerMenu }>Portfolio</a></li>
          <li><a href="#contact" onClick={ setShowBurguerMenu }>Contact</a></li>
        </ul>
    );
  }
}
 
export default NavRight;
