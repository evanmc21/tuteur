import React, {Component} from 'react';
import {
  Form,
  Container,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Button
} from 'reactstrap';
import '../App.css';

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
    this.setState({[name]: val});
  }

  render() {
    return (<Container>
      <Form className="form" onSubmit={(e) => this.props.addClient(e, this.state)}>
        <FormGroup row="row">
          <br/>
          <Label id="label" for="name" sm={3}>name</Label>
          <Col sm={6}>
            <Input input="input" type="text" name="name" id="name" placeholder="with a placeholder" value={this.state.name} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="age" sm={3}>age</Label>
          <Col sm={4}>
            <Input input="input" type="number" name="age" id="age" placeholder="age" value={this.state.age} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="location" sm={3}>location</Label>
          <Col sm={6}>
            <Input input="input" type="text" name="location" id="location" placeholder="location" value={this.state.location} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="school" sm={3}>school</Label>
          <Col sm={6}>
            <Input input="input" type="text" name="school" id="school" placeholder="school" value={this.state.school} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="rate" sm={3}>rate/hr ($)</Label>
          <Col sm={4}>
            <Input input="input" type="number" name="rate" id="rate" placeholder="rate" value={this.state.rate} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="goals" sm={3}>goals</Label>
          <Col sm={7}>
            <Input input="input" type="text" name="goals" id="goals" placeholder="goals" value={this.state.goals} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="notes" sm={3}>notes</Label>
          <Col sm={7}>
            <Input input="input" type="textarea" name="notes" id="notes" onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <Button id="button" button="button" type="submit">add client</Button>
      </Form>
    </Container>)
  }
}

export default NewClientForm;
