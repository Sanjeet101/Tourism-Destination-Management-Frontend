import React, { Component } from 'react'


class Register extends Component{
    render(){
        return(
            <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                            <img src="images/tripPlanner.png" class="brand_logo" alt="Logo"></img>
                             <div class="input-group mb-1"></div>
                            <h>Create Your Account</h>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center form_container">
                        <form>
                        <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="" class="form-control input_user"  placeholder="Name"></input>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="" class="form-control input_user"  placeholder="Username"></input>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="email" name="" class="form-control input_user"  placeholder="Email"></input>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="" class="form-control input_pass"  placeholder="Password"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="" class="form-control input_user"  placeholder="Account Type"></input>
                            </div>
                          
                                <div class="d-flex justify-content-center mt-3 login_container">
                                <a href="/login"><button type="button" name="button" class="btn login_btn">Register</button>
                                </a>
                         
                       </div>
                        </form>
                    </div>
            
                  
                        <div class="d-flex justify-content-center links">
                            <a href="/login">Account Created!!! <b>Go To Login</b></a>
                        </div>
                    </div>
                </div>
            </div>
      
        )
    }
}
export default Register;