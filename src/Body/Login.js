import React, { Component, state, loginCustomer,} from 'react'
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    state ={
        email : "",
        password : "",
    }
    loginCustomer = (e)=>{
        e.preventDefault();
        const data ={
            email : this.state.email,
            password : this.state.password
        }
        axios.post("http://localhost:90/customers/login",data)
        .then(response=>{
            console.log(response);
        })
        
        .catch()
    }
    render(){
        return(
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
                                <form onSubmit={this.loginCustomer}>
                        
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="email" name="" className="form-control input_user" value={this.state.email}  
                                 onChange={(event)=>{this.setState({email:event.target.value})}}
                                placeholder="Email"></input>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="" className="form-control input_pass" value={this.state.password}
                                onChange={(event)=>{this.setState({password:event.target.value})}}
                                placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                    <label className="custom-control-label">Remember me</label>
                                </div>
                            </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <a href="/profile" className="ml-2"> 
                                    <button type="submit" value="send" name="button" className="btn login_btn">Login</button> 
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
export default Login;
