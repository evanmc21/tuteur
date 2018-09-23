import React, { Component } from 'react';
import Client from './Client';
import NewClientForm from './NewClientForm';
import $ from 'jquery';
// import ClientCard from './ClientCard';
let token = "Bearer " + localStorage.getItem("jwt")

class Clients extends Component {
  constructor(props){
    super(props);
    this.state = {
      clients: []
    }
    this.addNewClient = this.addNewClient.bind(this)
    this.removeClient = this.removeClient.bind(this)
  }



  componentsDidMount(){

      console.log(token)
      $.ajax({
        url: "http://localhost:3000/api/clients",
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', token)},
        context: this,
        success: function (result){
          this.setState({clients: JSON.stringify(result)})
        }
      })

    }

    addNewClient(name, age, location, school, goals, notes, rate, userId){
      $.ajax({
        url: ("http://localhost:3000/api/clients", { client: {name: name, age, location, school, goals, notes, rate, userId }}),
        type: "POST",
        beforeSend: function(xhr){xhr.serRequestHeader('Authorization', token)},
        context: this,
        success: function (result){
          const clients = [ ...this.state.clients, result.data]
          this.setState({clients: JSON.stringify(clients)})
        }
      })
    }

    removeClient(id) {
      $.ajax({
        url:"http://localhost:3000/api/clients/" + id,
        type: "DELETE",
        beforeSend: function(xhr){xhr.serRequestHeader('Authorization', token)},
        context: this,
        success: function (result){
          const clients = this.state.clients.filter(client => client.id !== id)
          this.setState({clients})
        }
      })
    }

      render(){
        return (
        <div>
            {this.state.clients.map(client => {
              return (<Client client={client} key={client.id} onRemoveClient={this.removeClient} />)
            })}
            <NewClientForm onNewClient={this.addNewClient} />
        </div>


      )
}
}

export default Clients;
