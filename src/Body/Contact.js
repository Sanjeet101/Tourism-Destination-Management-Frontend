import React, { Component, state, sendCustomerData } from 'react'
import axios from 'axios';

class Contact extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",

  }
  sendCustomerData = (e) => {
    e.preventDefault();
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }
    axios.post("http://localhost:90/contact/send", data)
      .then()
      .catch()

  }
  render() {
    return (
      <div>
        <body>
          <div class="contact-clean">
            <form onSubmit={this.sendCustomerData} method="post"><div class="c1">Get In Touch</div>
              <h2 class="text-center">Contact Us</h2>
              <div class="c1 des">(Please contact us if you face any problem. We appreciate any feedback you have.)</div>
              <div class="form-group"><label class="c2">First Name:</label>
                <input class="form-control c" type="text" name="name" value={this.state.firstname}
                  onChange={(event) => { this.setState({ firstname: event.target.value }) }} placeholder="First Name" /></div>
              <div class="form-group"><label class="c2">Last Name:</label>
                <input class="form-control c" type="text" name="name" value={this.state.lastname}
                  onChange={(event) => { this.setState({ lastname: event.target.value }) }} placeholder="Last Name" /></div>
              <div class="form-group"><label class="c2">Email:</label>
                <input class="form-control c" type="email" name="email" value={this.state.email}
                  onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Email Address" />

                <small class="form-text text-danger">Remember to enter a valid email address.</small></div>
              <div class="form-group"><label class="c2">Subject:</label>
                <input class="form-control c" type="email" name="subject" value={this.state.subject}
                  onChange={(event) => { this.setState({ subject: event.target.value }) }} placeholder="Subject" /></div>
              <div class="form-group"><label class="c1">Message:</label>
                <input class="form-control c message" name="message" value={this.state.message}
                  onChange={(event) => { this.setState({ message: event.target.value }) }} placeholder="We Listen To You" /></div>
              <div class="form-group"><button class="btn btn-primary btn-lg" type="submit">Send</button></div>
            </form>
          </div>
        </body>
      </div>


    )
  }
}

export default Contact;