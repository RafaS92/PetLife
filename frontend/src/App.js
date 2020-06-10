import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import ServicesList from "./components/ServicesList";
import Location from "./components/Location";
import { Jumbotron, Button, Carousel, Container } from "react-bootstrap";
import { Modal } from "react-modal";
import ModalBasic from "./components/ModalBasic";

class App extends React.Component {
  render() {
    return (
      <div className="App-color container">
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={ServicesList} />
            <Route exact path="/locations" component={Location} />
            <Route exact path="/modalbasic" component={ModalBasic} />
          </Switch>
          <Jumbotron fluid className="Jumbotron-bottom">
            <div className="row row-cols-2 row-cols-md-2">
              <div className="col mb-2 ">
                <h2>CONTACT US</h2>
                <p>
                  Phone: (832) 920-0685
                  <br />
                  Fax: (281) 403-7701
                  <br />
                  Email: bestservice@petlife.com
                  <br />
                  Pet Life <br />
                </p>
                <br />
                <br />
                <br />
                <h2>FOLLOW US</h2>
                <i class="fab fa-facebook ml-4 fa-3x"></i>
                <i class="fab fa-instagram ml-4 fa-3x"></i>
              </div>
              <div className="col mb-2 ">
                <div>
                  <h2>HOURS OF OPERATION</h2>
                  <p>
                    Monday – Friday: 7:00am to 6:30pm
                    <br />
                    Saturday: 9:00am to 6:00pm
                    <br />
                    Sunday: 10:00am to 6:00pm
                  </p>
                  <br />
                  <h2>LOCATIONS</h2>
                  <br />
                  <img src="/images/map.jpg" className="img-map" />
                </div>
              </div>
            </div>
          </Jumbotron>

          <Jumbotron className="Jumbotron-bottom2">
            <div>
              <p>© 2020 Pet Life. All Rights Reserved.</p>
            </div>
          </Jumbotron>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
