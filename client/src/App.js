import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {clientsReceived: ""}
    this.getClients = this.getClients.bind(this)
  }
  getClients(){
    this.setState({clientsReceived: "Help the kids learn!"})
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
