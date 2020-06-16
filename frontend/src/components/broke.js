// import React, { useState } from "react";
// import Modal from "react-modal";
// import { Jumbotron, Container, Button, Form, Row, Col } from "react-bootstrap";

// Modal.setAppElement("#root");

// export default function ModalCreatebooking() {
//   // const [booking, setBooking] = useState("");

//   // const handleChange = (e) => {
//   //   // console.log(e.target.value);
//   //   // console.log(e.target.name);
//   //   setBooking({
//   //     ...booking,
//   //     [e.target.name]: e.target.value,
//   //   });
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   let id = parseInt(localStorage.id);

//   //   console.log(booking);
//   //   // console.log(parseInt(localStorage.id));
//   //   // localStorage.clear() //to logout

//   //   fetch("http://localhost:3000/bookings", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({
//   //       user_id: id,
//   //       // pet_id: pet_id,
//   //       services: booking.services,
//   //       client_notes: booking.client_notes,
//   //       fee: booking.fee,
//   //       location: booking.location,
//   //     }),
//   //   })
//   //     .then((resp) => resp.json())
//   //     .then((newbooking) => {
//   //       setBooking({
//   //         booking: { ...booking, newbooking },
//   //       });
//   //     });
//   //   alert("ya chingaste morro");
//   // };

//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setModalIsOpen(true)} className="btn btn-primary">
//         Book
//       </button>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         className="sizemodal"
//       >
//         <Jumbotron className="JumbotronF" fluid>
//           <Container>
//             <div className="row row-cols-2 row-cols-md-2">
//               <div className="col mb-2 ">
//                 <img
//                   src="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2018/05/gettyimages-963167968.jpg?w=1024&h=0&crop=1"
//                   className="img-form"
//                 />
//               </div>
//               <div className="col mb-2 card4">
//                 <div className="container">
//                   <Row>
//                     <h1>Register Your booking</h1>
//                     <Col sm={8}>
//                       <Form>
//                         //handlesubmit needed
//                         <Form.Group controlId="bookingName">
//                           <Form.Label>booking Name</Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="name"
//                             required
//                             placeholder="ex.Churro"
//                             // value={booking.name}
//                             // onChange={(e) => {
//                             //   handleChange(e);
//                             // }}
//                           ></Form.Control>
//                         </Form.Group>
//                         <Form.Group controlId="bookingType">
//                           <Form.Label>Services</Form.Label>
//                           <Form.Control
//                             as="select"
//                             name="services"
//                             required
//                             // value={booking.services}
//                             // onChange={(e) => {
//                             //   handleChange(e);
//                             // }}
//                           >
//                             <option>Basic</option>
//                             <option>Silver</option>
//                             <option>Gold</option>
//                             <option>Platinum</option>
//                           </Form.Control>
//                         </Form.Group>
//                         <Form.Group controlId="bookingBreed">
//                           <Form.Label>Client Notes:</Form.Label>
//                           <Form.Control
//                             type="textArea"
//                             name="client_notes"
//                             // value={booking.client_notes}
//                             // onChange={(e) => {
//                             //   handleChange(e);
//                             // }}
//                           ></Form.Control>
//                         </Form.Group>
//                         <Form.Group>
//                           <Form.Label>Fee</Form.Label>
//                           <Form.Control
//                             controlId="bookingSize"
//                             name="fee"
//                             required
//                             // onChange={(e) => {
//                             //   handleChange(e);
//                             // }}
//                             // value={booking.fee}
//                           >
//                             <option>Small</option>
//                           </Form.Control>
//                         </Form.Group>
//                         <Form.Group controlId="bookingType">
//                           <Form.Label>Location:</Form.Label>
//                           <Form.Control
//                             as="select"
//                             name="location"
//                             required
//                             // value={booking.location}
//                             // onChange={(e) => {
//                             //   handleChange(e);
//                             // }}
// //                           >
// //                             <option>Downtown</option>
// //                             <option>Sugar Land</option>
// //                             <option>The Heights</option>
// //                           </Form.Control>
// //                         </Form.Group>
// //                         <Form.Group>
// //                           <Button variant="primary" type="submit">
// //                             Register
// //                           </Button>
// //                         </Form.Group>
// //                       </Form>
// //                     </Col>
// //                   </Row>
// //                 </div>
// //                 <button onClick={() => setModalIsOpen(false)}>Close</button>
// //               </div>
// //             </div>
// //           </Container>
// //         </Jumbotron>

// //         <div className="row row-cols-2 row-cols-md-2">
// //           <div className="col mb-2 "></div>
// //           <div className="col mb-2 "></div>
// //         </div>
// //       </Modal>
// //     </div>
// //   );
// // }
