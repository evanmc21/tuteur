import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {clientsReceived: ""}
    this.getClients = this.getClients.bind(this)
  }

  login() {
    const email = $("#email").value()
    const password = $("#password").value()
    const request = {"auth": {"email": email, "password": password}}
    console.log(request)
    $.ajax({
      url: "http://localhost:3000/api/user_token",
      type: "POST",
      data: request,
      dataType: "json",
      success: function (result) {
        console.log(result)
        localStorage.setItem("jwt", result.jwt)
      }
    })
  }
  getClients(){
    $.ajax({
      url: "http://localhost:3000/api/clients",
      type: "GET",
      context: this,
      success: function (result){
        this.setState({clientsReceived: JSON.stringify(result)})
      }
    });
  }
  render() {
    return (
      <div className="App">
      <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Banana Management System
        </h1>
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            id="password"
            type="password"
          />
          </form>
          <br />
          <button
            onClick={this.login}
          >
              Login
          </button>
        <br />
        <button
        onClick={this.getClients}
        style={{marginTop: '25vh'}}
        >
        Show Clients
        </button>
        <p>
          {this.state.clientsReceived}
        </p>
      </div>
    );
  }
}

export default App;
