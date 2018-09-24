import React, { Component } from 'react';
import Auth from './modules/Auth';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      myClients: null,
      clientsReceived: false
    }
  }

  componentDidMount() {
    fetch('/profile', {
      method: "GET",
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(res => res.json())
      .then(res => {
        this.setState({
          myClients: res.clients,
          clientsReceived: true
      })
    }).catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        {(this.state.clientsReceived) ? this.state.myClients.map(client => {
          return <h1 key={client.id}>{client.name}</h1>
        })
      : <p>loading..</p>}
      </div>
    )
  }
}

export default Dashboard;
