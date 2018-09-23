import React, { Component } from 'react';
import Client from './Client';
import $ from 'jquery';
// import ClientCard from './ClientCard';
class Clients extends Component {
  constructor(props){
    super(props);
    this.state = {
      clients: []
    }
  }



  componentsDidMount(){

      let token = "Bearer " + localStorage.getItem("jwt")
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

      render(){
        return (
        <div>
            {this.state.clients.map(client => {
              return (<Client client={client} key={client.id} />)
            })}
        </div>
      )
}
}

export default Clients;
