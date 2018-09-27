import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class ClientCard extends Component {

  render(){
    const { client } = this.props
    return(
      <div>
        <Card key={client.id} body inverse style={{ backgroundColor: '#333', bordercolor: '#333', margin: "2%" }}>
          <CardTitle><h3>{client.name}</h3></CardTitle>
          <CardText>
            <p>age: {client.age}</p>
            <p>location: {client.location}</p>
          </CardText>
        <Link key={client.id} to={`/clients/${client.id}`}>
        client details
        </Link>
      </Card>
    </div>
    )};
}

export default ClientCard;
