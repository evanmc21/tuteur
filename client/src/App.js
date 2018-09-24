import React, { Component } from 'react';
// import Login from './Login';
import Clients from './Clients';
import Signup from './Signup';
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
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
  }
  handleSignupSubmit(e, data){
    e.preventDefault();
    fetch('/users', {
      method: "POST",
      body: JSON.stringify({
        user: data,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
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
      <Route exact path="/signup" render={() => <Signup
      handleSignupSubmit={this.handleSignupSubmit} />}
        />
      </div>
      </Router>
    );
  }
}

export default App;
