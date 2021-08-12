import React from 'react';
import NavRight from './NavbarRight';
import './Burguer.css';

class Burguer extends React.Component {
  render() {
    const { setShowBurguerMenu, showBurguerMenu } = this.props;
    return (
      <div>
        { (showBurguerMenu) ?
            <>
            <span className="burguerBox" onClick={ setShowBurguerMenu }>
              <div className="divIcon"></div>
              <div className="divIcon"></div>
              <div className="divIcon"></div>
            </span>
            <div className="slideOut"><NavRight/></div>
          </>
          :
          <>
            <span className="burguerBox" onClick={ setShowBurguerMenu }>
              <div className="divIcon45"></div>
              <div className="divIcon0"></div>
              <div className="divIcon135"></div>
            </span>
            <div className="slideIn"><NavRight setShowBurguerMenu={ setShowBurguerMenu }/></div>
          </>
        }
      </div>
     
    );
  }
}
 
export default Burguer;
