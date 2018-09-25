import React, { Component } from 'react';
// import Client from './Client';
// import NewClientForm from './NewClientForm';
// import EditClientForm from './EditClientForm';
// import ClientCard from './ClientCard';
// let token = "Bearer " + localStorage.getItem("jwt")

class Clients extends Component {
  constructor(){
    super();
    this.state = {
      clientList: null,
      clientsReceived: false,
    }
  }

componentDidMount(){
  fetch('/clients')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        clientList: res.clients,
        clientsReceived: true,
      })
    }).catch(err => console.log(err));
  }

    renderClients(){
        return this.state.clientList.map(client => {
          return(
            <div className="client" key={client.id}>
              <h1>{client.name}</h1>
              <p>{client.age}</p>
            </div>
          )
        })
      }

    render(){
      return (
        <div className="client-list">
          {(this.state.clientsReceived)
          ? this.renderClients()
          : <p>hold up...</p>}
        </div>
      )
    }
}

export default Clients;
