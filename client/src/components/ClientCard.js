import React, {Component} from 'react';
import { Card, Badge, CardTitle, CardText } from 'reactstrap';

class ClientCard extends Component {

  render() {
    const {client} = this.props
    return (<div>
      <Card id="clientCard" key={client.id} body="body" inverse="inverse" style={{
          backgroundColor: '#0db4b9',
          bordercolor: '#0db4b9',
          margin: "2%",
          textAlign: "center"
        }}>
        <CardTitle>
          <h3>{client.name}</h3>
        </CardTitle>
        <CardText>
          <p>age: {client.age}</p>
          <p>location: {client.location}</p>
        </CardText>
        <Badge id="badge" key={client.id} href={`/clients/${client.id}`}>
          client details
        </Badge>
      </Card>
    </div>)
  };
}

export default ClientCard;
