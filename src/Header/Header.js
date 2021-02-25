import React, { Component } from 'react'

class Header extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <img src="images/logo.png" class="logo" alt=""></img>
            <div class="container">
            
                
                <a class="navbar-brand js-scroll-trigger" href="/"><b>Trip Planner</b></a>
                
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/"><b>Home</b></a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/"><b>Destinations</b></a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/about"><b>About</b></a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/blog"><b>Blog</b></a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/contact"><b>Contact</b></a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/login"><b>Login</b></a></li>
                    </ul>
                </div>
            </div>
   
        </nav>
        
        
        
        )
    }
}
export default Header;