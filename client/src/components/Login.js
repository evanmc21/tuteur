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
    this.setState({[name]: val});
  }

  render() {
    return (<Container>
      <Form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
        <FormGroup>
          <Label for="email">email:</Label>
          <Input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} required="required"/>
        </FormGroup>

        <FormGroup>
          <Label for="password">password:</Label>
          <Input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} required="required"/>
        </FormGroup>
        <Button style={{
            backgroundColor: '#0db4b9',
            border: '#0db4b9'
          }} type="submit">login
        </Button>
      </Form>
    </Container>)
  }

}

export default Login;
