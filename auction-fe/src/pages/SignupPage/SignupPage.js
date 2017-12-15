import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBarStatic from '../../components/NavBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { signup } from './actions';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  async signup(event) {
    event.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.signup(credentials);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <NavBarStatic />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#fff',
            padding: 40,
            marginTop: 100,
            borderRadius: 3,
            width: 500,
          }}
        >
          <h1>Signup</h1>
          <p>
            Start bidding on auctions now! Or maybe you want to sell something
            yourself?
          </p>

          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={this.signup}
          >
            <TextField
              style={{ marginTop: 20 }}
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
            <TextField
              style={{ marginTop: 10 }}
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <RaisedButton
              style={{ marginTop: 20 }}
              primary
              type="submit"
              label="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ users: state.authentication }), { signup })(
  SignupPage,
);
