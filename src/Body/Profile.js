import axios from "axios";
import React, { Component, state} from "react";
import {Redirect} from 'react-router-dom';

class Profile extends Component{

    state = {
        name : '',
        address : '',
        email: '',
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }

    componentDidMount(){
        axios('http://localhost:90/profile', this.state.config)
        .then((response)=>{
            this.setState({
                name : response.data.name,
                address : response.data.address,
                email : response.data.email
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        if(!localStorage.getItem('token')){
            return<Redirect to ='/login'/>
        }
        return(
            <div className="row">
                <div className="container">
                    <div className="col-md-12">
                        <h2>{this.state.name}</h2>
                        <p>{this.state.address}</p>
                        <p>{this.state.email}</p>
                    </div>
                </div>    

            </div>
        )
    }
}
export default Profile;