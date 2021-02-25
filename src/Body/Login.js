import React, { Component } from 'react'

class Login extends Component{
    render(){
        return(
            <div class="container h-100">
                 
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                            
                            <img src="images/tripPlanner.png" class="brand_logo" alt="Logo"></img>
                            <div class="input-group mb-3"></div>
                            <h3><b>Login Here</b></h3>
                            
                        </div>
                    </div>
                    <div class="d-flex justify-content-center form_container">
                        <form>
                        
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
                            <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customControlInline"/>
                                    <label class="custom-control-label" for="customControlInline">Remember me</label>
                                </div>
                            </div>
                                <div class="d-flex justify-content-center mt-3 login_container">
                                    
                                <a href="/destinations" class="ml-2"> 
                                <button type="button" name="button" class="btn login_btn">Login</button> 
                                </a>
                                </div>
                        </form>
                    </div>
            
                    <div class="mt-4">
                        <div class="d-flex justify-content-center links">
                            Don't have an account? <a href="/register" class="ml-2"><b>Register</b></a>
                        </div>
                        <div class="d-flex justify-content-center links">
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