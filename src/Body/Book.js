import React, { Component, state, sendCustomerData } from 'react'
import axios from 'axios';

class Book extends Component {
    state = {
        fullname: "",
        email: "",
        username: "",
        destination: "",
        no_of_people: "",
        departure: "",
        arrival: "",
        phone: "",
    }
    sendCustomerData = (e) => {
        e.preventDefault();
        const data = {
            fullname: this.state.name,
            email: this.state.email,
            username: this.state.username,
            destination: this.state.destination,
            no_of_people: this.state.no_of_people,
            departure: this.state.departure,
            arrival: this.state.arrival,
            phone: this.state.phoonr
        }
        axios.post("http://localhost:90/booking/submit", data)
            .then()
            .catch()

    }
    render() {
        return (
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="card10">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img src="images/tripPlanner.png" className="brand_logo" alt="Logo"></img>
                                <div className="input-group mb-10"></div>
                                <h5>Book Details</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form onSubmit={this.sendCustomerData}>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" className="form-control input_user" value={this.state.fullname}
                                        onChange={(event) => { this.setState({ fullname: event.target.value }) }}
                                        placeholder="Full Name"></input>

                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="email" name="" className="form-control input_user" value={this.state.email}
                                        onChange={(event) => { this.setState({ email: event.target.value }) }}
                                        placeholder="Email"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" className="form-control input_user" value={this.state.username}
                                        onChange={(event) => { this.setState({ username: event.target.value }) }}
                                        placeholder="Username"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="text" name="" className="form-control input_pass" value={this.state.destination}
                                        onChange={(event) => { this.setState({ destination: event.target.value }) }}
                                        placeholder="Destination" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" className="form-control input_user" value={this.state.no_of_people}
                                        onChange={(event) => { this.setState({ no_of_people: event.target.value }) }}
                                        placeholder="No of People"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" className="form-control input_user" value={this.state.departure}
                                        onChange={(event) => { this.setState({ departure: event.target.value }) }}
                                        placeholder="Departure"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" className="form-control input_user" value={this.state.arrival}
                                        onChange={(event) => { this.setState({ arrival: event.target.value }) }}
                                        placeholder="Arrival"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" className="form-control input_user" value={this.state.phone}
                                        onChange={(event) => { this.setState({ phone: event.target.value }) }}
                                        placeholder="Phone"></input>
                                </div>

                                <div className="d-flex justify-content-center mt-3 login_container">
                                   
                                        <button type="submit" value="send" className="btn login_btn">Submit</button>
                          
                                </div>
                            </form>
                        </div>
                       
                    </div>
                </div>
            </div>

        )
    }
}
export default Book;