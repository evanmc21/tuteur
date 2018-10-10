import React, {Component} from 'react';
import NewClientForm from './NewClientForm';
import ClientCard from './ClientCard';
import {Col, Container, Row} from 'reactstrap'
import Auth from '../modules/Auth';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myClients: [],
    }
  }

  componentDidMount() {
    this.getUserClients();
  }

  getUserClients() {
    fetch('/profile', {
      method: "GET",
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(res => res.json()).then(res => {
      this.setState({myClients: res.clients})
    }).catch(err => console.log(err));
  }

  addClient(e, data) {
    fetch('/clients', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      },
      body: JSON.stringify({client: data})
    }).then(res => res.json()).then(res => {
      console.log(res);
      this.getUserClients();
    }).catch(err => console.log(err));
  }

  render() {
    let clientCards = this.state.myClients.map(client => {
      return (<Col sm="3">
        <ClientCard key={client.id} client={client}/>
      </Col>)
    })
    return (<Container fluid="fluid">

      {this.state.myClients === ""
      ? <p style={{
          textAlign: "center"
        }}>this is your dashboard. any clients you add will be displayed here. add a client below.</p>
      : <h2 style={{
          textAlign: "center"
        }}>your clients</h2>
      }
      <Row row="row">
        {clientCards}
      </Row>
      <br/>
      <h2 style={{
          textAlign: "center"
        }}>add client</h2>
      <br/>
      <Row>
        <div className="form">
          <NewClientForm addClient={this.addClient}/>
        </div>
      </Row>
    </Container>)
  }
}

export default Dashboard;
