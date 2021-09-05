import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div class="bg-light">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
              <p class="ead text-muted mb-0">
                <h1>About us</h1>
              </p>
              <p class="lead text-muted mb-0">
                <h3>Trip Planner and Booking Site</h3>
              </p>
              <p class="lead text-muted">
                A journey planner, trip planner, or route planner is a
                specialized search engine used to find an optimal means of
                travelling between two or more given locations, sometimes using
                more than one transport mode. ... Trip planners have been widely
                used in the travel industry by booking agents. TripPlanner was
                created as a tool to provide instant price estimates for complex
                trips. We know how important your time is, so we made it easy to
                use and don’t require you to spend time on formalities required
                with other trip-planning tools.{" "}
                <a href="/about" class="text-muted"></a>
              </p>
            </div>
            <div class="col-lg-6 d-none d-lg-block">
              <img
                src="https://www.tibetdiscovery.com/assets/images/nepal-tour/maps/Nepal-Tourist-Destinations-Map.jpg"
                alt=""
                class="img-fluid"
              ></img>
            </div>
          </div>
        </div>

        <div class="bg-white py-5">
          <div class="container py-5">
            <div class="row align-items-center mb-5">
              <div class="col-lg-6 order-2 order-lg-1">
                <i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h2 class="font-weight-light">Welcome to Trip Planner</h2>
                <p class="font-italic text-muted mb-4">
                  This Site is User-friendly and you can choose here your
                  favourite destination to visit including both inside and
                  outside valley.
                </p>
                <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">
                  Learn More
                </a>
              </div>
              <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img
                  src="https://cdn.kimkim.com/files/a/article_images/images/d5cc9aca2dc584f568fabc81913bb9e9d0e664d1/big-77419293c3986c0d2aade3c8f58fcb80.jpg"
                  alt=""
                  class="img-fluid mb-4 mb-lg-0"
                />
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-5 px-5 mx-auto">
                <img
                  src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/4bf4b9a35eedbe35e99505004357d82717302971/medium-b5ca426d9b0b6bfb51269b3a3bfbffd3.jpg"
                  alt=""
                  class="img-fluid mb-4 mb-lg-3"
                />
              </div>
              <div class="col-lg-6">
                <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                <h2 class="font-weight-light">Enjoy Your Moment</h2>
                <p class="font-italic text-muted mb-4">
                  Enjoy your travel and if you have any queries reagarding to
                  our sites, you can leave message thorugh contact form.
                </p>
                <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-light py-5">
          <div class="container py-5">
            <div class="row mb-4">
              <div class="col-lg-5">
                <h1 class="display-4 font-weight-light">
                  <b>About me</b>
                </h1>
                <p class="font-italic text-muted">
                  I am ready for any help for customer reagarding this travel
                  site.
                </p>
              </div>
            </div>

            <div class="row text-center">
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-1/s200x200/238247226_2383632418439937_6181758972425044862_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=o78Fc8JbWnwAX94BEUm&_nc_ht=scontent.fktm3-1.fna&oh=24f5d05892c6059e96e63eb8b1d027a9&oe=61588166"
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">Sanjeet Pandey</h5>
                  <span class="small text-uppercase text-muted">
                    Desinger and Developer
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
