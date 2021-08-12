import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './SinglePage.css';

require('dotenv/config');


const envURL = process.env.REACT_APP_BACKEND_URL;

class SinglePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.handShakeBE = this.handShakeBE.bind(this);
  }

  componentDidMount() {
    this.handShakeBE();
  }

  async handShakeBE() {
    const URL = `${envURL}/login/handshake`;
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    const request = await fetch(URL, requestOptions);
    const response = await request.json();
    console.log(response.message)
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}
 
export default SinglePage;