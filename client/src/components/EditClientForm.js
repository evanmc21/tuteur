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
    const { id, name, age, location, school, goals, notes, rate } = this.state;
    this.props.editClient(id, name, age, location, school, goals, notes, rate)
  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <input
          name="name"
          type="text"
          placeholder="Name" required
          value={this.state.name}
          onChange={this.handleChange} />
      <input
          name="age"
          type="number"
          placeholder="Age" required
          value={this.state.age}
          onChange={this.handleChange} />
      <input
          name="location"
          type="text"
          placeholder="Location" required
          value={this.state.location}
          onChange={this.handleChange} />
      <input
          name="school"
          type="text"
          placeholder="School" required
          value={this.state.school}
          onChange={this.handleChange} />
      <input
          name="goals"
          type="text"
          placeholder="Goals"
          value={this.state.goals}
          onChange={this.handleChange} />
      <input
          name="notes"
          type="text"
          placeholder="Notes"
          value={this.state.notes}
          onChange={this.handleChange} />
      <input
          name="rate"
          type="number"
          placeholder="Rate per hour"
          value={this.state.rate}
          onChange={this.handleChange} />
      </form>
      </div>
    )
  }
};

export default EditClientForm;
