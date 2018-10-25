import React, { Component } from 'react';
import {
  Form,
  Container,
  FormGroup,
  Label,
  Col,
  Input,
  Button
} from 'reactstrap';
import axios from 'axios';
import Auth from '../modules/Auth';


class EditClient extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      age: '',
      location: '',
      school: '',
      goals: '',
      notes: '',
      rate: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.getClientDetails();
  }

  getClientDetails(){
    let id = this.props.match.params.id
    fetch('/clients/' + id, {
      method: "GET",
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(response => response.json())
    .then(response => {
        this.setState({
          id: response.client.id,
          name: response.client.name,
          age: response.client.age,
          location: response.client.location,
          school: response.client.school,
          goals: response.client.goals,
          notes: response.client.notes,
          rate: response.client.rate,
      }, () => {
        console.log(this.state)
      })
    }).catch(err => console.log(err))
  }

  handleChange(e){
    const name = e.target.name;
    const val = e.target.value;
    this.setState({[name]: val});
  }

  onSubmit(e){
    const newClient = {
      name: this.refs.name.value,
      age: this.refs.age.value,
      location: this.refs.age.value,
      school: this.refs.age.value,
      goals: this.refs.age.value,
      notes: this.refs.age.value,
      rate: this.refs.age.value
    }
    this.editClient(newClient);
    e.preventDefault();
  }

  editClient(newClient){
    fetch(`/clients/'${this.state.id}`, {
      method: "PATCH",
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      },
      data: newClient
    }).then(response => response.json())
    .then(response => {
      this.props.history.push('/dashboard')
    }).catch(err => console.log(err));
  }

  render() {
    return (<Container>
      <Form className="form" onSubmit={this.onSubmit.bind(this)}>
        <FormGroup row="row">
          <br/>
          <Label id="label" for="name" sm={3}>name</Label>
          <Col sm={6}>
            <Input input="input" type="text" name="name" id="name" value={this.state.name} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="age" sm={3}>age</Label>
          <Col sm={4}>
            <Input input="input" type="number" name="age" id="age" value={this.state.age} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="location" sm={3}>location</Label>
          <Col sm={6}>
            <Input input="input" type="text" name="location" id="location" value={this.state.location} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="school" sm={3}>school</Label>
          <Col sm={6}>
            <Input input="input" type="text" name="school" id="school" value={this.state.school} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="rate" sm={3}>rate/hr ($)</Label>
          <Col sm={4}>
            <Input input="input" type="number" name="rate" id="rate" value={this.state.rate} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="goals" sm={3}>goals</Label>
          <Col sm={7}>
            <Input input="input" type="text" name="goals" id="goals" value={this.state.goals} required="required" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label id="label" for="notes" sm={3}>notes</Label>
          <Col sm={7}>
            <Input input="input" type="textarea" name="notes" id="notes" value={this.state.notes} onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <Button id="button" button="button" type="submit">edit client</Button>
      </Form>
    </Container>)
  }
}

export default EditClient;
