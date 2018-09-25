import React, { Component } from 'react';
import NewClientForm from './NewClientForm';
import ClientCard from './ClientCard';
import Auth from '../modules/Auth';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      myClients: null,
      clientsReceived: false
    }
  }

  componentDidMount() {
    this.getUserClients();
  }

  getUserClients(){
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

  addClient(e, data) {
    fetch('/clients', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      },
      body: JSON.stringify({
        client: data,
      })
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.getUserClients();
      }).catch(err => console.log(err));
  }

  render(){
    return(
      <div>
      <NewClientForm addClient={this.addClient} /><br />
        {(this.state.clientsReceived) ? this.state.myClients.map(client => {
          return <ClientCard key={client.id} client={client}/>
        })
      : <p>loading..</p>}
      </div>
    )
  }
}

export default Dashboard;
