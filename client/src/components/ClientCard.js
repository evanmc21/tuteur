import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClientCard extends Component {

  render(){
    const { client } = this.props
    return(
      <div key={client.id} className="ClientCard">
        <h3>{client.name}</h3>
        <p>age: {client.age}</p>
        <p>location: {client.location}</p>
        <Link key={client.id} to={`/clients/${client.id}`}>
        client details
        </Link>
      </div>
    )};
}

export default ClientCard;
