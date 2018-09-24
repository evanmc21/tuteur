import React, { Component } from 'react';

class NewClientForm extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        age: '',
        location: '',
        school: '',
        goals: '',
        notes: '',
        rate: ''
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
      const name = e.target.name;
      const val = e.target.value;
      this.setState({
        [name]: val,
      });
    }

    render() {
      return(
        <form onSubmit={(e) => this.props.addClient(e, this.state)}>
            <input
                type="text"
                name="name"
                placeholder="Name" required
                value={this.state.name}
                onChange={this.handleChange} />
            <input
                type="number"
                name="age"
                placeholder="Age" required
                value={this.state.age}
                onChange={this.handleChange} />
            <input
                type="text"
                name="location"
                placeholder="Location" required
                value={this.state.location}
                onChange={this.handleChange}/>
            <input
                type="text"
                name="school"
                placeholder="School" required
                value={this.state.school}
                onChange={this.handleChange}/>
            <input
                type="text"
                name="goals"
                placeholder="Goals"
                value={this.state.goals}
                onChange={this.handleChange}  />
            <input
                type="text"
                name="notes"
                placeholder="Notes"
                value={this.state.notes}
                onChange={this.handleChange}  />
            <input
                type="number"
                name="rate"
                placeholder="Rate per hour" required
                value={this.state.rate} />
                <input type="submit" value="add client" />
            </form>
  )}
}

export default NewClientForm;
