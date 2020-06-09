import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import ServicesList from "./components/ServicesList";

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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
