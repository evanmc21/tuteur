import React, {Component} from 'react';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import ClientDetail from './ClientDetail';
import NavBar from './NavBar'
import User from './User'
import Home from './Home';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Auth from '../modules/Auth';
import '../App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated()
    }
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleSignupSubmit(e, data) {
    e.preventDefault();
    fetch('/users', {
      method: "POST",
      body: JSON.stringify({user: data}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(res => {
      Auth.authenticateToken(res.token);
      this.setState({auth: Auth.isUserAuthenticated()})
    }).catch(err => {
      console.log(err);
    })
  }

  handleLoginSubmit(e, data) {
    e.preventDefault();
    fetch('/login', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(res => {
      Auth.authenticateToken(res.token);
      this.setState({auth: Auth.isUserAuthenticated()})
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
      this.setState({auth: Auth.isUserAuthenticated()})
    }).catch(err => console.log(err));
  }

  render() {
    return (<Router>
      <div className="App">
        <div>
          {
            this.state.auth
              ? <User/>
              : <NavBar/>
          }

        </div>

        <Route exact="exact" path="/signup" render={(
            ) => (this.state.auth)
            ? <Redirect to="/dashboard"/>
            : <Signup handleSignupSubmit={this.handleSignupSubmit}/>}/>
        <Route exact="exact" path="/login" render={(
            ) => (this.state.auth)
            ? <Redirect to="/dashboard"/>
            : <Login handleLoginSubmit={this.handleLoginSubmit}/>}/>
        <Route exact="exact" path="/dashboard" render={() => <Dashboard/>}/>
        <Route exact="exact" path="/clients/:id" component={ClientDetail}/>
        <Route exact="exact" path="/" component={Home}/>
        { this.state.auth ? <span onClick={this.handleLogout}>logout</span> : null }
      </div>
    </Router>);
  }
}

export default App;
