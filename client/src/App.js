import React, { Component } from 'react';
// import Login from './Login';
import Clients from './Clients';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import Auth from './modules/Auth';
import './App.css';
// const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(){
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
  }


  render() {
    return (
      <Router>
      <div className="App">
      <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Tuteur
        </h1>
      <Route exact path="/clients" render={() =>
      <Clients />} />


      </div>
      </Router>
    );
  }
}

export default App;
