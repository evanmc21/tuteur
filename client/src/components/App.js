import React, { Component } from 'react';
import Login from './Login';
import Clients from './Clients';
import Signup from './Signup';
import Dashboard from './Dashboard';
import ClientDetail from './ClientDetail';
import NavBar from './NavBar'
import { IndexLinkContainer } from 'react-router-bootstrap';
import Home from './Home';
// import EditClientForm from './EditClientForm';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Auth from '../modules/Auth';
// import '../App.css';
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
      <div>
      <div>
      <NavBar />
      <span onClick={this.handleLogout}>logout</span>
      </div>

      <Route exact path="/clients" render={() =>
      <Clients />} />
      <Route exact path="/signup" render={() => (this.state.auth) ?
      <Redirect to ="/dashboard" /> : <Signup handleSignupSubmit={this.handleSignupSubmit} />} />
      <Route exact path="/login" render={() => (this.state.auth) ?
      <Redirect to ="/dashboard" /> : <Login handleLoginSubmit={this.handleLoginSubmit} />} />
      <Route exact path="/dashboard" render={() =>
      <Dashboard />} />
      <Route exact path="/clients/:id" component={ClientDetail}/>
      <Route exact path="/" component={Home}/>
      </div>
    </Router>
    );
  }
}

export default App;
