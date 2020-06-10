import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function ModalSilver() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="btn btn-primary">
        See Details
      </button>
      <button className="btn btn-warning ml-4">Booking</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className="row row-cols-2 row-cols-md-2">
          <div className="col mb-2 ">
            <img src="/images/card2.jpg" className="img-modal" />
          </div>
          <div className="col mb-2 ">
            <h1>Silver</h1>
            <p>nada we</p>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
