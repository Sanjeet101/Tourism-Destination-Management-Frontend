import React, { Component, logout } from 'react'
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        window.location.href = '/'

    }

    render() {

        // if (localStorage.getItem('token') && localStorage.getItem('accountType') == 'Admin') {
        //     var menu =
        //         <>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/"><b>Home</b></a></li>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/"><b>Destinations</b></a></li>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/about"><b>About</b></a></li>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/blog"><b>Blog</b></a></li>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/contact"><b>Contact</b></a></li>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/login"><b>Login</b></a></li>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/admin"><b>Admin</b></a></li>
        //             <button onClick={this.logout}>Logout</button>
        //         </>

        // }
        // else if (localStorage.getItem('token') && localStorage.getItem('accountType') == 'Customer') {
        //     var menu =
        //         <>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/"><b>Home</b></a></li> 
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/"><b>Destinations</b></a></li>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/about"><b>About</b></a></li>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/blog"><b>Blog</b></a></li>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/contact"><b>Contact</b></a></li>
        //             <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/login"><b>Login</b></a></li>
        //             <button onClick={this.logout}>Logout</button>

        //         </>
        // }
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <img src="images/logo.png" className="logo" alt=""></img>
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/"><b>Tourism Destination Management</b></a>

                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/"><b>Home</b></a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/destinations"><b>Destinations</b></a></li>
   
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/blog"><b>Blog</b></a></li>
  
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/login"><b>Login</b></a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/admin"><b>Admin</b></a></li>
                            <button onClick={this.logout}>Logout</button>

                        </ul>
                    </div>
                    {/* {menu} */}
                </div>
               
            </nav>
        )
    }
}
export default Header;