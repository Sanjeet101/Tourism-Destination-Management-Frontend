import axios from 'axios';
import { Button } from 'bootstrap';
import React, { Component, state } from 'react';


class Destination extends Component {
  state = {
    place: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:90/place/fetch')
      .then((response) => {
        console.log(response);
        this.setState({
          place: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  render() {
    return (
      <div class="container">

        <h1 class="font-weight-light"><b>Choose Your Favourite Place</b></h1>
        <div class="row">
          {/* <div class="col-md-4 mb-5">
            <div class="card h-100">
              <img class="card-img-top" src="https://pix10.agoda.net/hotelImages/287/287692/287692_14103114370023105375.jpg?s=1024x768" alt="" />
              <div class="card-body">
                <h4 class="card-title">Nagarkot</h4>

                <p class="card-text">2 Days <p class="card-text">Hotel<p class="card-text">City Tour
            <p class="card-text">BBQ Dinner <p class="card-text"><h4>From Rs.7000</h4></p></p></p></p></p>

              </div>
              <div class="card-footer">
                <a href="/book" class="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div> */}
      
            {this.state.place.map((place) => {
              return (
                <div className="col-md-4 mb-5">
                  <div className
                  ="card h-100">
                    <img
                      src={'http://localhost:90/images/' + place.pimage}
                      class='img img-responsive'
                    />
                    <div class='card-body'>
                      <h4 class='card-title'>{place.placename}</h4>
                      <p class='card-text'>{place.placeprice}</p>
                      <button class='btn btn-outline-primary'>
                        <a href={'/placesingledata/' + place._id}className="btn btn-danger">
                          Click here and Get More Info.
                          </a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
            </div>
    
    )
  }
}
export default Destination;