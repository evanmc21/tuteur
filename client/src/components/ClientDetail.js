import React, {Component} from 'react';
import { Col, Row, Container } from 'reactstrap';
import Auth from '../modules/Auth';

class ClientDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch('/clients/' + id, {
      method: "GET",
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(res => res.json()).then(res => this.handleFetch(res)).catch(err => console.log(err));

  }

  handleFetch = (res) => {
    this.setState({client: res.client});
  }

  render() {
    return (
      <Container>
        <Col>
          <Row>
            <h1 style={{ color: "#1d1145"}}>{this.state.client.name}</h1>
          </Row>
        </Col>
        <br></br>
        <Col>
        <div className="clientDetails">
          <h3>age: {this.state.client.age}</h3>
          <h3>location: {this.state.client.location}</h3>
          <h3>school: {this.state.client.school}</h3>
          <h3>rate/hr: ${this.state.client.rate}</h3>
          <h3>goals: {this.state.client.goals}</h3>
          <h3>notes: {this.state.client.notes}</h3>
        </div>
      </Col>
    </Container>
    )
  }
}

export default ClientDetail;
