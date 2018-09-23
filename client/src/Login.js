import React, { Component } from 'react';
import $ from 'jquery';

class Login extends Component {


  login() {

    const email = $("#email").val()
    const password = $("#password").val()
    const request = {"auth": {"email": email, "password": password}}
    $.ajax({
      url: "http://localhost:3000/api/user_token",
      type: "POST",
      data: request,
      dataType: "json",
      success: function (result) {
        localStorage.setItem("jwt", result.jwt)
      }
    })


  }
  render(){
    return(
      <div>
      <form>
        <label htmlFor="email">Email: </label>
        <br />
        <input
          name="email"
          id="email"
          type="email"
        />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          name="password"
          id="password"
          type="password"
        />
        </form>
        <br />
        <button
          onClick={this.login}
        >
            Login
        </button>
      </div>
    )
  }

}

export default Login;
