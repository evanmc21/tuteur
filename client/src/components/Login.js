import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, FormText, Button } from 'reactstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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

  render(){
    return(
      <div className="login-form">
        <Form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
          <FormGroup>
            <Label for="email">email:</Label>
            <Input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
          </FormGroup>

        <FormGroup>
          <Label for="password">password:</Label>
          <Input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
          />
          </FormGroup>
          <Button
          type="submit"
          >login
          </Button>
        </Form>
      </div>
    )
  }

}

export default Login;
