import React, { Component } from 'react'

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <img src="images/logo.png" className="logo" alt=""></img>
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="/"><b>Trip Planner</b></a>
                
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/"><b>Home</b></a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/destinations"><b>Destinations</b></a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/about"><b>About</b></a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/blog"><b>Blog/Gallery</b></a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/contact"><b>Contact</b></a></li>
                        </ul>
                </div>
            </div>
            </nav>
            )
        }
    }
export default Header;