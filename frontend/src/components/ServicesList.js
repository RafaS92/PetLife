import React from "react";
import { Jumbotron } from "react-bootstrap";

export default class ServiceList extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="Jumbotron-card2">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Are you ready for the best experience?</h1>
              <p class="lead">
                When traveling with dogs, one thing is certain. Poop happens.
                For those times when you forgot to pack your poop bags and need
                to find the closest store in an unfamiliar town, or even worse,
                when you need to find an emergency veterinarian open at 4:00am
                in the morning, turn to our directory of pet businesses in
                Houston,Texas for information on our favorite pet stores,
                veterinarians, doggie daycare facilities, sitters, groomers,
                trainers, and other pet professionals in Houston,Texas.
              </p>
            </div>
          </div>
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
                  <a class="btn btn-primary">Show details</a>
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
                  <a class="btn btn-primary">Show details</a>
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
                  <a class="btn btn-primary">Show details</a>
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
                  <a class="btn btn-primary">Show details</a>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
