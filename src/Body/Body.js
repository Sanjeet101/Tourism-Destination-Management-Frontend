import React, { Component } from 'react'
import Home from './Home';
import Login from './Login';
import Register from './Register'
import Destinations from './Destination';
import About from './AboutUs';
import Contact from './Contact';
import Admin from './Admin';
import Book from './Book';
import PlaceShowAll from './PlaceShowAll';
import Blog from './Blog';
import Payment from './Payment'
import Profile from './Profile';
import { Route } from 'react-router-dom';
import PlaceSingleData from './PlaceSingleData';
import UpdatePlace from './UpdatePlace';

class Body extends Component {
    render() {
        return (
            <div>

                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/" exact component={Home} />
                <Route path="/destinations" exact component={Destinations} />
                <Route path="/about" exact component={About} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/book" exact component={Book} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/admin" exact component={Admin} />
                <Route path="/payment" exact component={Payment} />
                <Route path="/profile" exact component={Profile} />
                <Route path='/placesingledata/:id'exact component={PlaceSingleData}/>
                <Route path='/placeshowall' exact component={PlaceShowAll} />
                <Route path='/placeupdate/:id' exact component={UpdatePlace} />
                <Route path='/update/:id' exact component={Admin} />
            </div>
        )
    }
}
export default Body;