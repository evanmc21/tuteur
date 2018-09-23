import React, { Component } from 'react';

class EditClientForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.client.id,
      name: this.props.client.name,
      age: this.props.client.age,
      location: this.props.client.location,
      school: this.props.client.school,
      goals: this.props.client.goals,
      notes: this.props.client.notes,
      rate: this.props.client.rate,
      userId: this.props.client.userId
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefaut();
    const { id, name, age, location, school, goals, notes, rate, userId } = this.state;
    this.props.editClient(id, name, age, location, school, goals, notes, rate, userId)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input
          name="name"
          type="text"
          placeholder="Name" required
          value={this.state.name}/>
      <input
          name="age"
          type="number"
          placeholder="Age" required
          value={this.state.age}/>
      <input
          name="location"
          type="text"
          placeholder="Location" required
          value={this.state.location}/>
      <input
          name="school"
          type="text"
          placeholder="School" required
          value={this.state.school}/>
      <input
          name="goals"
          type="text"
          placeholder="Goals"
          value={this.state.goals}/>
      <input
          name="notes"
          type="text"
          placeholder="Notes"
          value={this.state.notes}/>
      <input
          name="rate"
          type="number"
          placeholder="Rate per hour"
          value={this.state.rate}/>
      <input ref={input => userId = input}
          type="hidden"
          id="user_id"
          name="user_id"
          value={this.state.userId}/>
    )
  }

}

export default EditClientForm
