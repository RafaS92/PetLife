import React from "react";
// import Jumbotron from "./Jumbotron";
import { Jumbotron, Button, Carousel, Container } from "react-bootstrap";
import Location from "./Location";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="Jumbotron">
          <div className="row row-cols-2 row-cols-md-2">
            <div>
              <img
                className="col mb-3 img-jumbotron"
                src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/07/22160617/dog-hotel-article.jpg"
              />
            </div>
            <div className="col mb-1 ">
              <div className="main-div">
                <h1 className="main-title">
                  PET LIFE
                  <span>PET LIFE </span>
                  <span>PET LIFE </span>
                  <span>The best place on earth</span>
                </h1>
              </div>
            </div>
            <div>
              <p>
                Thanks for your prompt reply! Okay, I’ve just tried that. It
                does reduce the height but at 400px, it doesn’t go all the way
                down to the bottom edge of the screen. When I set it at 780px,
                however, it just about touches it. So… to solve this problem, do
                we just do a trial and error and see which height is best?
              </p>
            </div>
          </div>
        </Jumbotron>

        <Carousel className="carousel">
          <Carousel.Item className="carousel-item">
            <img
              src="https://images.squarespace-cdn.com/content/v1/52daf520e4b01225621eb96c/1414036015923-OD1YNNIEIV0EXBXC2ZAI/ke17ZwdGBToddI8pDm48kF4R7C2Ceumo-q5k85DJq3QUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhIF-NJg88BZ6Wqtv6nxpEMXnJz_NFjor9WvMXhNZMZam4bjm9DAHF2kOsIZRJKXnA/final_front2.jpg?format=1500w"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              src="https://www.prague-stay.com/images/full_image/1920x1200/prague%20vip%20pets%20main-resize~vip-pets-5-star-pet-hotel-school.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img src="/images/slide3.jpg" alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img src="/images/slide1.jpg" alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Jumbotron className="Jumbotron3" fluid>
          <Container>
            <div className="row row-cols-2 row-cols-md-2">
              <div className="col mb-2 card3">
                <h1 className="title">New Client Special!</h1>
                <h3 className="subtitle">
                  GET YOUR FIRST DAY OF DAYCARE FREE!{" "}
                </h3>
                <p>Call to schedule your pet's temperament test today.</p>
              </div>
              <div className="col mb-2 ">
                <h1 className="title3">Call to Booking!</h1>
                <h4>Don't miss the chance to spoil your pet!</h4>
                <p>
                  <Button variant="warning">832-920-0685</Button>
                </p>
              </div>
            </div>
          </Container>
        </Jumbotron>

        <Jumbotron className="Jumbotron-card">
          <h1 class="display-4">Services</h1>
          <div className="row row-cols-1 row-cols-md-4">
            <div className="col mb-2">
              <div class="card" style={{ width: "20rem" }}>
                <div className="inner">
                  <img src="/images/card1.jpg" class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Basic</h4>
                  <p class="card-text"> que pedo</p>
                </div>

                <div class="card-body">
                  <a class="btn btn-warning">Show details</a>
                </div>
              </div>
            </div>

            <div className="col mb-2">
              <div class="card" style={{ width: "18 rem" }}>
                <div className="inner">
                  <img src="/images/card2.jpg" class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Silver</h4>
                  <p class="card-text"> que pedo</p>
                </div>

                <div class="card-body">
                  <a class="btn btn-warning">Show details</a>
                </div>
              </div>
            </div>

            <div className="col mb-2">
              <div class="card" style={{ width: "18 rem" }}>
                <div className="inner">
                  <img src="/images/card3.jpg" class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Gold</h4>
                  <p class="card-text"> que pedo</p>
                </div>

                <div class="card-body">
                  <a class="btn btn-warning">Show details</a>
                </div>
              </div>
            </div>

            <div className="col mb-2">
              <div class="card" style={{ width: "20rem" }}>
                <div className="inner">
                  <img src="/images/card4.jpg" class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Platinum</h4>
                  <p class="card-text"> que pedo</p>
                </div>

                <div class="card-body">
                  <a class="btn btn-warning">Show details</a>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron className="Jumbotron4" fluid>
          <Container>
            <div className="row row-cols-2 row-cols-md-2">
              <div className="col mb-2 ">
                <img
                  src="https://www.thearkspa.com/images/content/img_9193-g626xx.jpg"
                  className="img-jumbotron2"
                />
              </div>
              <div className="col mb-2 ">
                <p className="text4">
                  If you'll be traveling in the near future, now is a good time
                  to start thinking about how you'll make sure your pets are
                  taken care of while you're away. One of the most common
                  choices pet owners make is that of boarding their pets at a
                  trusted facility in Oakland Park while they're gone. This way,
                  they can rest assured that their pets are fed, played with,
                  and taken care of daily.
                </p>
              </div>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
