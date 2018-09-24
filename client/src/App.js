import React, { Component } from 'react';
import Login from './Login';
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
      shouldGoToDashboard: false
    }
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
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
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          shouldGoToDashboard: true
        })
      }).catch(err => {
        console.log(err);
      })
  }

  handleLoginSubmit(e, data){
    e.preventDefault();
    fetch('/login', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
      'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticate(res.token);
      this.setState({
        auth: Auth.isUserAuthenticated(),
        shouldGoToDashboard: true
      })
    }).catch(err => console.log(err));
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
      <Route exact path="/login" render={() => <Login
        handleLoginSubmit={this.handleLoginSubmit} />}
        />
      </div>
      {(this.state.shouldGoToDashboard)} ? <Redirect to="/dashboard" />
      </Router>
    );
  }
}

export default App;
