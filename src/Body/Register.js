import React, { Component, state, sendCustomerData } from 'react'
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

class Register extends Component {
    state = {
        name: "",
        username: "",
        email: "",
        password: "",
        accountType: ""
    }
    sendCustomerData = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            accountType: this.state.accountType
        }
        axios.post("http://localhost:90/customers/insert", data)
            .then()
            .catch()

    }
    render() {
        return (
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img src="images/tripPlanner.png" className="brand_logo" alt="Logo"></img>
                                <div className="input-group mb-1"></div>
                                <h6>Create Your Account</h6>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form onSubmit={this.sendCustomerData}>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" className="form-control input_user" value={this.state.name}
                                        onChange={(event) => { this.setState({ name: event.target.value }) }}
                                        placeholder="Name"></input>

                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" className="form-control input_user" value={this.state.username}
                                        onChange={(event) => { this.setState({ username: event.target.value }) }}
                                        placeholder="Username"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i class="fa fa-envelope-square"></i></span>
                                    </div>
                                    <input type="email" name="" className="form-control input_user" value={this.state.email}
                                        onChange={(event) => { this.setState({ email: event.target.value }) }}
                                        placeholder="Email"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fa fa-key"></i></span>
                                    </div>
                                    <input type="password" name="" className="form-control input_pass" value={this.state.password}
                                        onChange={(event) => { this.setState({ password: event.target.value }) }}
                                        placeholder="Password" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" className="form-control input_user" value={this.state.accountType}
                                        onChange={(event) => { this.setState({ accountType: event.target.value }) }}
                                        placeholder="Account Type"></input>
                                </div>

                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <a href="/login">
                                        <button type="submit" value="send" className="btn login_btn">Register</button>
                                    </a>

                                </div>
                            </form>
                        </div>
                        <div className="d-flex justify-content-center links">
                            <a href="/login">Already Have Account? <b>Go To Login</b> </a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Register;