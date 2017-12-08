/* eslint no-restricted-globals: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Api from '../../utils/Api';
import { fetchUsers, createUser, deleteUser } from './actions';

class UserListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  async createUser(event) {
    event.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password,
    };
    await this.props.createUser(credentials);
    this.setState({ username: '', password: '' });
  }

  handleDeleteUser = async id => {
    await this.props.deleteUser(id);
  };

  renderUsers = () => {
    if (this.props.users.data) {
      return this.props.users.data.map(user => (
        <ListItem>
          <Link to={`/users/${user._id}`} key={user._id}>
            {user.username}
          </Link>
          <RaisedButton
            label="DELETE USER"
            secondary
            onClick={() => this.handleDeleteUser(user._id)}
          />
        </ListItem>
      ));
    }
  };

  render() {
    if (this.props.users.data) {
      return (
        <List>
          <Subheader>Hello from user list</Subheader>
          <List>{this.renderUsers()}</List>
          <form onSubmit={this.createUser}>
            <TextField
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
            <TextField
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <RaisedButton primary type="submit" label="Submit" />
          </form>
        </List>
      );
    }
  }
}

export default connect(state => ({ users: state.users }), {
  fetchUsers,
  createUser,
  deleteUser,
})(UserListPage);
