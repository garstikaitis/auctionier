import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBarStatic from '../../components/NavBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { login } from './actions';
import { Field, reduxForm } from 'redux-form';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  async login(event) {
    event.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.login(credentials);
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
          <h1>Login</h1>
          <p>
            Start bidding on auctions now! Or maybe you want to sell something
            yourself?
          </p>

          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={this.login}
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
            <Link
              style={{
                marginTop: 10,
                fontSize: 12,
                color: '#000',
                textDecoration: 'none',
              }}
              to="/forgot-password"
            >
              Forgot password?
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

LoginPage = reduxForm({
  form: 'login',
});

export default connect(state => ({ authentication: state.authentication }), {
  login,
})(LoginPage);
