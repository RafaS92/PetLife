import React from "react";
// import Jumbotron from "./Jumbotron";
import { Jumbotron, Button, Carousel } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Carousel className="carousel">
          <Carousel.Item className="carousel-item">
            <img src="/images/slide1.jpg" alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img src="/images/slide2.jpg" alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img src="/images/slide3.jpg" alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Jumbotron className="Jumbotron-card">
          <div>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
