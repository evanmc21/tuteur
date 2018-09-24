import React, { Component } from 'react';
import Login from './Login';
import Clients from './Clients';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Logout from './Logout';
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
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
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
      Auth.authenticateToken(res.token);
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err => console.log(err));
  }

  handleLogout() {
    fetch('/logout', {
      method: "DELETE",
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(res => {
      Auth.deauthenticateToken();
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
      <div className="App">
      <div className="nav">
      <Link to="/login">login</Link>
      <Link to="/signup">signup</Link>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/clients">clients</Link>
      <span onClick={this.handleLogout}>Logout</span>
      </div>
      <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Tuteur
        </h1>
      <Route exact path="/clients" render={() =>
      <Clients />} />
      <Route exact path="/signup" render={() => (this.state.auth) ?
      <Redirect to ="/dashboard" /> : <Signup handleSignupSubmit={this.handleSignupSubmit} />} />
      <Route exact path="/login" render={() => (this.state.auth) ?
      <Redirect to ="/dashboard" /> : <Login handleLoginSubmit={this.handleLoginSubmit} />} />
      <Route exact path="/dashboard" render={() =>
      <Dashboard />} />
      </div>
    </Router>
    );
  }
}

export default App;
