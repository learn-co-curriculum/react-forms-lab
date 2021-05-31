import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    const name = e.target.name
    const value = e.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password

    if(username && password) {
      this.props.handleLogin({username, password})
      this.setState({
        username: '',
        password: ''
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
