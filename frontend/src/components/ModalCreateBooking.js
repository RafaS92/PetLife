import React, { useState } from "react";
import Modal from "react-modal";
import { Jumbotron, Container, Button, Form, Row, Col } from "react-bootstrap";

Modal.setAppElement("#root");

export default function ModalCreateBooking() {
  const [pet, setPet] = useState([]);

  const handleChange = (e) => {
    setPet({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.value,
        pet_type: e.target.value,
        breed: e.target.value,
        size: e.target.value,
      }),
    })
      .then((resp) => resp.json())
      .then((newPet) => {
        setPet({
          ...pet,
          newPet,
        });
      });
    alert("ya chingaste morro");
  };

  console.log(pet);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="btn btn-primary">
        PET!!PET!!PET!!
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="sizemodal"
      >
        <Jumbotron className="JumbotronF" fluid>
          <Container>
            <div className="row row-cols-2 row-cols-md-2">
              <div className="col mb-2 ">
                <img
                  src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/07/22160617/dog-hotel-article.jpg"
                  className="img-form"
                />
              </div>
              <div className="col mb-2 card4">
                <div className="container">
                  <Row>
                    <Col sm={8}>
                      <h1>Register Your Pet</h1>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="PetName">
                          <Form.Label>Pet Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            required
                            placeholder="ex.Churro"
                            value={pet.name}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="PetType">
                          <Form.Label>Pet Type</Form.Label>
                          <Form.Control
                            as="select"
                            name="pet_type"
                            required
                            value={pet.pet_type}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            <option>Dog</option>
                            <option>Cat</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="PetBreed">
                          <Form.Label>Breed</Form.Label>
                          <Form.Control
                            type="text"
                            name="breed"
                            required
                            placeholder="Chihuahua"
                            value={pet.breed}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group
                          controlId="PetBreed"
                          name="size"
                          required
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          value={pet.size}
                        >
                          <Form.Label>Size</Form.Label>
                          <Form.Control
                            as="select"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group>
                          <Button variant="primary" type="submit">
                            Register
                          </Button>
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </div>
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
