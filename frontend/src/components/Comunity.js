import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import ReviewList from "./ReviewList";

class Comunity extends React.Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/reviews")
      .then((resp) => resp.json())
      .then((reviews) => {
        this.setState({
          reviews: reviews,
        });
      });
  }

  render() {
    return (
      <div>
        {/* <div className="banner">
          <video autoPlay muted loop>
            <source src="/videos/cutDogs.mp4" type="video/mp4" />
          </video>
          <h2>PET LIFE</h2>
          <p>Your pet is our family</p>
        </div> */}

        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default Comunity;
