import React from "react";
import ModalCreatePet from "./ModalCreatePet";
import ModalCreateBooking from "./ModalCreateBooking";
import { Jumbotron } from "react-bootstrap";

class Booking extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron className="Jumbotron-card">
          <h1 class="display-4">Fucking FOrms</h1>
          <div className="row row-cols-1 row-cols-md-2">
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
                  <a onClick={this.openModal}></a>
                  <ModalCreatePet
                    ref={(node) => {
                      this.modal = node;
                    }}
                  />
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
                  <a onClick={this.openModal}></a>
                  <ModalCreateBooking
                    ref={(node) => {
                      this.modal = node;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Booking;
