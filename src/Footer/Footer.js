import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';



class Footer extends Component {
  render() {

    return (
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h2>About</h2>
              <p class="text-justify">The website enables users to quickly and easily explore a destination’s offerings
              and create personalized sightseeing itineraries by utilizing local expertise and cutting-edge artificial
              intelligence. Drawing from a database of destinations Inspirock makes trip planning easy,intuitive and enjoyable for a year.
              Trip Planner For Partners enables trip planning within any innovative travel website. Trip Planner for Partners is now
              available for NTOs, corporate partners, travel agencies, airlines and destination marketing organizations of all
shapes and sizes.</p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h2>Categories</h2>
              <ul class="footer-links">
                <li>Booking</li>
                <li>Choose Destination</li>
                <li>OutSide Valley</li>
                <li>Inside Valley</li>
                <li>Responsive</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h2>Quick Links</h2>
              <ul class="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/payment">Payment</a></li>
                <li><a href="/">Home</a></li>
              </ul>
            </div>
          </div>

        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
             <a href="#"> Trip Planner</a>.
                </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a class="dribbble" href="#"><i class="fa fa-instagram"></i></a></li>
                <li><a class="linkedin" href="#"><i class="fa fa-envelope"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>



    )
  }
}
export default Footer;