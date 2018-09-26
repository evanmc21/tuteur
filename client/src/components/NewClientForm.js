import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, FormText, Button } from 'reactstrap';

class NewClientForm extends Component {
    constructor() {
      super();
      this.state = {
          name: '',
          age: 0,
          location: '',
          school: '',
          goals: '',
          notes: '',
          rate: 0
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
      const name = e.target.name;
      const val = e.target.value;
      this.setState({
        [name]: val
      });
    }

    render() {
      return(
        <Form onSubmit={(e) => this.props.addClient(e, this.state)}>
       <FormGroup row>
          <Label for="name" sm={2}>name</Label>
          <Col sm={4}>
              <Input type="text" name="name" id="name" placeholder="with a placeholder" value={this.state.name} required onChange={this.handleChange}/>
          </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="age" sm={2}>age</Label>
          <Col sm={2}>
             <Input type="number" name="age" id="age" placeholder="age" value={this.state.age} required onChange={this.handleChange}/>
          </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="location" sm={2}>location</Label>
          <Col sm={4}>
             <Input type="text" name="location" id="location" placeholder="location" value={this.state.location} required onChange={this.handleChange} />
          </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="school" sm={2}>school</Label>
          <Col sm={4}>
             <Input type="text" name="school" id="school" placeholder="school" value={this.state.school} required onChange={this.handleChange}/>
          </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="rate" sm={2}>rate/hr ($)</Label>
          <Col sm={2}>
             <Input type="number" name="rate" id="rate" placeholder="rate" value={this.state.rate} required onChange={this.handleChange}/>
          </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="goals" sm={2}>goals</Label>
          <Col sm={7}>
             <Input type="text" name="goals" id="goals" placeholder="goals" value={this.state.goals} required onChange={this.handleChange}/>
          </Col>
       </FormGroup>

      <FormGroup row>
        <Label for="notes" sm={2}>notes</Label>
        <Col sm={7}>
          <Input type="textarea" name="notes" id="notes" onChange={this.handleChange}/>
        </Col>
      </FormGroup>
  <Button type="submit">add client</Button>
</Form>
  )}
}

export default NewClientForm;
