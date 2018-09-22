import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {clientsReceived: ""}
    this.getClients = this.getClients.bind(this)
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
