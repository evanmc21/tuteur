import React, {Component} from 'react';
import NewClientForm from './NewClientForm';
import ClientCard from './ClientCard';
import {Col, Container, Row, Form, Input, Button} from 'reactstrap'
import Auth from '../modules/Auth';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myClients: [],
      search: ''
    }
  }

  componentDidMount() {
    this.getUserClients();
  }

  updateSearch(e) {
    this.setState({search: e.target.value})
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
    let filteredClients = this.state.myClients.filter(
      (client) => {
        return client.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );
    let clientCards = filteredClients.map(client => {
      return (<Col sm="3">
        <ClientCard key={client.id} client={client}/>
      </Col>)
    })
    return (<Container fluid="fluid">

      {this.state.myClients == ""
      ? <h4 style={{
          textAlign: "center"
        }}>this is your dashboard. any clients you add will be displayed here. add a client below.</h4>
      : <h2 style={{
          textAlign: "center"
        }}>your clients</h2>
      }
      <Col className="d-none d-md-flex justify-content-end">
        <Form inline>
          <Input type="search" className="mr-3" placeholder="Search Clients"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)} />
          <Button type="submit" color="info" outline>Search</Button>
        </Form>
      </Col>
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
