import React, { useState } from "react";
import Modal from "react-modal";
import { Jumbotron, Container, Button, Form, Row, Col } from "react-bootstrap";

Modal.setAppElement("#root");

export default function ModalCreatebooking() {
  const [booking, setBooking] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let id = parseInt(localStorage.id);

    // console.log(parseInt(localStorage.id));
    // localStorage.clear() //to logout

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
        pet_id: booking.pet_id,
        services: booking.services,
        fee: booking.fee,
        location: booking.location,
        number_days: booking.number_days,
        arrival: booking.arrival,
      }),
    })
      .then((resp) => resp.json())
      .then((newbooking) => {
        setBooking({
          booking: { ...booking, newbooking },
        });
      });
    alert("ya chingaste morro");
  };

  let name = localStorage.username;

  // console.log(localStorage);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="btn btn-primary">
        Register
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="sizemodal3"
      >
        <Jumbotron className="JumbotronF" fluid>
          <Container fluid>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <h1>Make a Booking</h1>
                  <Form.Group>
                    <Form.Label>Pet id</Form.Label>

                    {/* <div>
                            {props.toys.map((toy) => (
                              <ToyCard
                                toy={toy}
                                deleteToy={props.deleteToy}
                                key={toy.id}
                              />
                            ))}
                          </div> */}
                    <Form.Control
                      type="text"
                      name="pet_id"
                      required
                      value={booking.pet_id}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      {/* {id.booking.map((booking) => (
                              <option>booking</option>
                            ))} */}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="bookingType">
                    <Form.Label>Services</Form.Label>
                    <Form.Control
                      as="select"
                      name="services"
                      required
                      value={booking.services}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      <option>Basic</option>
                      <option>Silver</option>
                      <option>Gold</option>
                      <option>Platinum</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      controlId="bookingSize"
                      name="location"
                      value={booking.location}
                      required
                      as="select"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={booking.location}
                    >
                      <option>Downtown</option>
                      <option>Sugar Land</option>
                      <option>The Heigths</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="bookingBreed">
                    <Form.Label>Check in</Form.Label>
                    <Form.Control
                      type="date"
                      name="arrival"
                      required
                      placeholder="Chihuahua"
                      value={booking.arrival}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="bookingBreed">
                    <Form.Label>Confirm number of days</Form.Label>
                    <Form.Control
                      type="text"
                      name="number_days"
                      required
                      value={booking.number_days}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="bookingType">
                    <Form.Label>Fee</Form.Label>
                    <Form.Control
                      type="text"
                      name="fee"
                      required
                      value={booking.fee}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    ></Form.Control>
                  </Form.Group>
                </Col>

                <Col>
                  <img
                    src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/07/22160617/dog-hotel-article.jpg"
                    className="img-form"
                  />

                  <Form.Group className="button-form">
                    <Button variant="primary " type="submit">
                      Register
                    </Button>

                    <Button
                      variant="danger ml-4"
                      onClick={() => setModalIsOpen(false)}
                    >
                      Close
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Jumbotron>
      </Modal>
    </div>
  );
}
