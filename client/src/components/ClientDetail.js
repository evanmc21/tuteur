import React, {Component} from 'react';
import {Link} from 'react-router-dom'
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
    return (<div className="client-detail">
      <h3>{this.state.client.name}</h3>
      <p>age: {this.state.client.age}</p>
      <p>location: {this.state.client.location}</p>
      <p>school: {this.state.client.school}</p>
      <p>goals: {this.state.client.goals}</p>
      <p>notes: {this.state.client.notes}</p>
      <p>rate/hr: ${this.state.client.rate}</p>
      <Link key={this.state.client.id} to={`/clients/${this.state.client.id}/edit`}>
        edit client
      </Link>
    </div>)
  }
}

export default ClientDetail;
