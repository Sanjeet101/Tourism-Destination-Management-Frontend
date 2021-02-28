import React, { Component } from 'react'

class Home extends Component{
    render(){
        return(
            <div class="container">

  
    <div class="row align-items-center my-5">
      <div class="col-lg-7">
        <img class="img-fluid rounded mb-4 mb-lg-0" src="https://www.welcomenepal.com/uploads/slider/everest-tkelly.jpeg" alt=""/>
      </div>

      <div class="col-lg-5">
        <h1 class="font-weight-light"><b>Safe Way To Travel</b></h1>
        <p> Travel Planners help clients make travel arrangements. They typically work in an office environment, making reservations, booking flights, and arranging transport. Travel Planners may also visit holiday resorts and destinations to help clients make informed decisions.</p>
        <a class="btn btn-primary" href="/login">Login To Book Your Destination</a>
      </div>
     
    </div>


    
    <div class="card text-white bg-secondary my-5 py-4 text-center">
      <div class="card-body">
        <p class="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p>
      </div>
    </div>

    <h5 class="font-weight-light"><b>Top Destinations</b></h5>
    <h1 class="font-weight-light"><b>Popular Destinations</b></h1>
   <div class="row">
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="https://i.pinimg.com/originals/c3/32/eb/c332ebcadbbf441ee58dc0fadf039dc6.jpg" alt=""/>
          <div class="card-body">
            <h4 class="card-title">Pokhara</h4>
            <p class="card-text"> Pokhara is one of the most scenic and exciting valley in Nepal. Pokhara valley is the ‘Jewel of the mid-west’, second major tourist sport in Nepal but the favorite of tourists from around the globe</p>
          </div>
          <div class="card-footer">
            <a href="https://www.tripadvisor.com/Tourism-g293891-Pokhara_Gandaki_Zone_Western_Region-Vacations.html" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="https://lh3.googleusercontent.com/proxy/J5Vxv0hN-96NiABGv5IcyQr9hPuCM_cSGOzN8g2FFKbO1MikvnSf5c-PQo22HGQLrMQGWW9EH_2CJhCx0UTFjEie_K3yw9-FH3ENV1dIKr7afupS9sPPQj4tqmB-R1Kua2UZ" alt=""/>
          <div class="card-body">
            <h4 class="card-title">Chitwan</h4>
            <p class="card-text">Chitwan was a dense forest ruled by the Tharu God/King Chitrasen Baba. He used to worship in the deep forest and ruled over his state. Chitwan, still known as Dense Forest was a land of leopard and Bengal tiger</p>
          </div>
          <div class="card-footer">
            <a href="https://www.tripadvisor.com/Attractions-g1927709-Activities-Chitwan_District_Narayani_Zone_Central_Region.html" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="https://transporthubnepal.com/wp-content/uploads/2020/02/lumbini.jpg" alt=""/>
          <div class="card-body">
            <h4 class="card-title">Lumbini</h4>
            <p class="card-text">Lumbini is the Buddha's birthplace, one of the world's most important spiritual sites and attracts Buddhist pilgrims from around the world. It is located in southern Nepal, near the Indian border. </p>
          </div>
          <div class="card-footer">
            <a href="https://www.tripadvisor.com/Tourism-g424940-Lumbini_Lumbini_Zone_Western_Region-Vacations.html" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    </div>
    </div>

        )
    }
}
export default Home;