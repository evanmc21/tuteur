import  React, { Component } from 'react';

class Signup extends Component {
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

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={(e) => this.props.handleSignupSubmit(e, this.state)}>
          <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
          />
          <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
          />
          <input
          type="submit"
          value="Sign Up!"
          />
        </form>
      </div>
    )
  };
}
export default Signup;