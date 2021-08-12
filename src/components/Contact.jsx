import React from 'react';
import './Contact.css';
require('dotenv/config');

const envURL = process.env.REACT_APP_BACKEND_URL;

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      emailStatusMessage: 'Sending your email! 📨',
      isSendingEmail: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.getUserReferences = this.getUserReferences.bind(this);
    this.serializeUserReferences = this.serializeUserReferences.bind(this);
    this.getAuthToken = this.getAuthToken.bind(this);
    this.portfolioinit = this.portfolioinit.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.fetchSubmit = this.fetchSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.id]: target.value })
  }

  resetForm(){
    this.setState({name: '', email: '',subject:'', message: ''})
  }

  async getUserReferences() {
    try {
      const URL = 'https://geolocation-db.com/json/';
      const request = await fetch(URL);
      const response = await request.json();
      return response;
    } catch (error) {
      const errorObj = { message: 'something bad happened!', error: error.message, status: 500 }
      console.error(errorObj)
    }
  }

  serializeUserReferences(response) {
    const { IPv4, country_name, latitude, longitude } = response;
    const serialized = {
      IPv4,
      countryName: country_name,
      latitude,
      longitude,
    }
    return serialized;
  }

  async getAuthToken(userData) {
    try {
      const URL = `${envURL}/login/nologin`;
      const requestOptions = {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      }
      const request = await fetch(URL, requestOptions);
      const responseToken = await request.json();
      return responseToken;
    } catch (error) {
      const errorObj = {message: 'something bad happened here', error: error.message, status: 500 }
      console.log(errorObj)
    }
  }

  async portfolioinit() {
    const location = await this.getUserReferences();
    const serializedLocation = this.serializeUserReferences(location);
    const token = await this.getAuthToken(serializedLocation);
    this.setState({ ...token, ...serializedLocation });
  }

  async fetchSubmit() {
    this.setState({ isSendingEmail: true });
    const { token } = this.state;
    const URL = `${envURL}/email`;
    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': token },
      body: JSON.stringify(this.state),
    }
    const request = await fetch(URL, requestOptions);
    const response = await request.json();
    return response;
  }

  async submitForm(event){
    event.preventDefault();
    try {
      const response = await this.fetchSubmit();
      if (response.message){
        setTimeout(() => {this.setState({ emailStatusMessage: response.message });}, 1000);
        setTimeout(() => {this.setState({
          isSendingEmail: false,
          emailStatusMessage: 'Sending your email! 📨'
        });}, 3000);
      } else {
        setTimeout(() => {this.setState({ emailStatusMessage: 'Done!! 😉 ...Thank you so much!!! ✌️' });}, 1000);
        setTimeout(() => {this.setState({
          isSendingEmail: false,
          emailStatusMessage: 'Sending your email! 📨'
        });}, 3000);
        this.resetForm();
      }
      console.clear();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { name, email, subject, message, isSendingEmail, emailStatusMessage } = this.state;
    return (
      (isSendingEmail) ?
      <div className="sectionContact">
        <p className="log">{emailStatusMessage}</p>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
      :
      <section id="contact" className="sectionContact">
        <div className="textContainer">
          <p className="textTitleContact">Contact Me</p>
          <p className="testMessageContact">Feel free and send me an email. Any feedback is welcome.</p><hr/>
        </div>
        <form id="contact-form">
          <input
            placeholder="Name"
            id="name"
            type="text" 
            className="inputSingle"
            value={name} 
            onChange={this.handleChange}
            onClick={this.portfolioinit}
            required
          />
          <input
            placeholder="Email"
            id="email"
            type="email"
            className="inputSingle"
            aria-describedby="emailHelp"
            value={email} 
            onChange={this.handleChange}
            required
          />
          <input
            placeholder="Subject"
            id="subject"
            type="text"
            className="inputSingle"
            value={subject}
            onChange={this.handleChange}
            required
          />
          <textarea
            placeholder="Message"
            id="message"
            className="inputArea"
            rows="5"
            value={message}
            onChange= {this.handleChange}
            required
          />
          <button type="submit" className="btnSend" onClick={ this.submitForm }>Send</button>
        </form>
      </section>
    );
  }
}
 
export default Contact;