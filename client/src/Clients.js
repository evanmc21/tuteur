import React, { Component } from 'react';
import Client from './Client';
import NewClientForm from './NewClientForm';
import $ from 'jquery';
import EditClientForm from './EditClientForm';
// import ClientCard from './ClientCard';
let token = "Bearer " + localStorage.getItem("jwt")

class Clients extends Component {
  constructor(props){
    super(props);
    this.state = {
      clients: [],
      editingClientId: null
    }
    this.addNewClient = this.addNewClient.bind(this)
    this.removeClient = this.removeClient.bind(this)
    this.editingClient = this.editingClient.bind(this)
    this.editClient = this.editClient.bind(this)
  }



  componentsDidMount(){

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

    editingClient(id) {
      this.setState({
        editingClientId: id
      })
    }

    editClient(id, name, age, location, school, goals, notes, rate, userId) {
      $.ajax({
        url:"http://localhost:3000/api/clients/" + id,
        method: "PATCH",
        beforeSend: function(xhr){xhr.serRequestHeader('Authorization', token)},
        context: this,
        success: function (result){
          const clients = this.state.clients;
          clients[id-1] = {id, name, age, location, school, goals, notes, rate, userId}
          this.setState(() =>({
            clients,
            editingClientId: null
          }))
        }
      })
    }

      render(){
        return (
        <div>
            {this.state.clients.map(client => {
              if (this.state.editingClientId === client.id ){
                return (<EditClientForm client={client} key={client.id} editClient={this.editClient} />)
              } else {
                return (<Client client={client}
                  key={client.id}
                  onRemoveClient={this.removeClient}
                  editingClient={this.editingClient} />)
              }
            })}
            <NewClientForm onNewClient={this.addNewClient} />
        </div>


      )
    }
}

export default Clients;
