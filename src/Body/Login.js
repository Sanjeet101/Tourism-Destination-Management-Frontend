import React, { Component, state, inputHandler1212, submitUser } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class Login extends Component {
    state = {
        email: '',
        password: '',
        loginChk: false
    }
    inputHandler1212 = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitUser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:90/customers/login', this.state)
            .then((response) => {
                this.setState({
                    loginChk: true
                })
                //  localStorage.setItem('token', response.data.token);
                localStorage.setItem('token', response.data.token)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        // // redirect
        // if (this.state.loginChk === true) {
        //     return <Redirect to='/destinations' />
        // }
        // if (localStorage.getItem('token')) {
        //     return <Redirect to='/destinations' />
        // }
        return (
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img src="images/tripPlanner.png" className="brand_logo" alt="Logo"></img>
                                <div className="input-group mb-3"></div>
                                <h6>Welcome to Trip Planner! Please login</h6>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form>

                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="email" name="email" className="form-control input_user" value={this.state.email}
                                        onChange={this.inputHandler1212}
                                        placeholder="Email"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" name="password" className="form-control input_pass" value={this.state.password}
                                        onChange={this.inputHandler1212}
                                        placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                        <label className="custom-control-label">Remember me</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <a href="/destinations" className="ml-2">
                                        <button className="btn login_btn" onClick={this.submitUser}>Login</button>
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex justify-content-center links">
                                Don't have an account? <a href="/register" className="ml-2"><b>Register</b></a>
                            </div>
                            <div className="d-flex justify-content-center links">
                                <a href="https://accounts.google.com/signin/v2/recoveryidentifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login