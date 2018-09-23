import React, { Component } from 'react';
import Login from './Login';
import Clients from './Clients';
// import $ from 'jquery'
import './App.css';
// const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {





  render() {
    return (
      <div className="App">
      <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Tuteur
        </h1>

        <br />
        <Login />
        <Clients />

      </div>
    );
  }
}

export default App;
