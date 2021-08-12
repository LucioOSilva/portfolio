import React from 'react';
import Burguer from './Burguer';
import NavRight from './NavbarRight';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: window.innerWidth < 769 ? false : true,
      showBurguerMenu: true,
    };
    this.setShowBurguerMenu = this.setShowBurguerMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    (window.innerWidth < 769) ? this.setState({ showMenu: false}) : this.setState({ showMenu: true })
  }

  setShowBurguerMenu() {
    const { showBurguerMenu } = this.state;
    if (showBurguerMenu) {
      this.setState({ showBurguerMenu: false})
    } else {
      this.setState({ showBurguerMenu: true})
    }
  }

  render() {
    const { showMenu, showBurguerMenu } = this.state;
    return (
      <header id="header" className="header">
        <span className="logoName">lucio</span>
        <nav>
          { (showMenu) ?
            <NavRight setShowBurguerMenu={ this.setShowBurguerMenu } /> :
            <Burguer setShowBurguerMenu={ this.setShowBurguerMenu } showBurguerMenu={ showBurguerMenu }/>
          }
        </nav>
      </header>
    );
  }
}
 
export default Navbar;