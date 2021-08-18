import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

class NotFound extends React.Component {
  render() { 
    return (
      <div className="pageNF">
        <div>
          <h1>OPS!</h1>
          <h3>Page NOT FOUND</h3>
          <Link to="/" className="link"><button>Voltar a pagina principal</button></Link>
        </div>
      </div>

    );
  }
}
 
export default NotFound;
