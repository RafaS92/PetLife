import React, { useState } from "react";
import Modal from "react-modal";
import { Jumbotron, Container, Button } from "react-bootstrap";

Modal.setAppElement("#root");
export default function ModalGold() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="btn btn-primary">
        See Details
      </button>
      <button className="btn btn-warning ml-4">Booking</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="sizemodal"
      >
        <Jumbotron className="JumbotronM" fluid>
          <Container>
            <div className="row row-cols-2 row-cols-md-2">
              <div className="col mb-2 ">
                <img src="/images/card2.jpg" className="img-modal" />
              </div>
              <div className="col mb-2 card4">
                <h1>Silver</h1>
                <p>nada we</p>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
              </div>
            </div>
          </Container>
        </Jumbotron>

        <div className="row row-cols-2 row-cols-md-2">
          <div className="col mb-2 "></div>
          <div className="col mb-2 "></div>
        </div>
      </Modal>
    </div>
  );
}
