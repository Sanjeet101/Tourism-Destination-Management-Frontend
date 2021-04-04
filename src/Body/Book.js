import React, { Component } from 'react'

class Book extends Component {
  render() {
    return (
      <div class="booking-form-w3layouts">
        <form action="#" method="post">
          <h2 class="sub-heading-agileits">Booking Details</h2>
          <div class="main-flex-w3ls-sectns">
            <div class="field-agileinfo-spc form-w3-agile-text">
              <input type="text" name="fullname" placeholder="Full Name" required="" />
            </div>
          </div>
          <div class="field-agileinfo-spc form-w3-agile-text">
            <input type="email" name="email" placeholder="Email" required="" />
          </div>
          <div class="field-agileinfo-spc form-w3-agile-text2">
            <input type="text" name="username" placeholder="Username" required="" />
          </div>

          <div class="field-agileinfo-spc form-w3-agile-text2">
            <input type="text" name="destination" placeholder="Destination" required="" />
          </div>
          <div class="field-agileinfo-spc form-w3-agile-text2">
            <input type="text" name="no_of_people" placeholder="No of People" required="" />
          </div>
          <div class="field-agileinfo-spc form-w3-agile-text2">
            <input type="text" name="departure" placeholder="Departure" required="" />
          </div>
          <div class="field-agileinfo-spc form-w3-agile-text2">
            <input type="text" name="arrival" placeholder="Arrival" required="" />
          </div>
          <div class="field-agileinfo-spc form-w3-agile-text2">
            <input type="text" name="Phone no" placeholder="Phone Number" required="" />
          </div>
          <div class="clear"></div>
          <input type="submit" value="Submit" />
          <input type="reset" value="Clear Form" />
          <div class="clear"></div>
        </form>
      </div>
    )
  }
}
export default Book;