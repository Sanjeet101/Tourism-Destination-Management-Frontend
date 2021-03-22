import React, { Component } from 'react'
import Home from './Home';
import Login from './Login';
import Register from './Register'
import Destinations from './Destination';
import About  from './AboutUs';
import Contact  from './Contact';
import Book from './Book';
import Blog from './Blog';
import {Route} from 'react-router-dom';


class Body extends Component{
    render(){
        return(
            <div>
                
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/" exact component={Home}/> 
                <Route path="/destinations" exact component={Destinations}/>
                <Route path="/about" exact component={About}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path="/book" exact component={Book}/>
                <Route path="/contact" exact component={Contact}/>
                </div>
        )
    }
}
export default Body;