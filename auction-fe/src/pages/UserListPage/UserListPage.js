/* eslint no-restricted-globals: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
        <div>
          <Link to={`/users/${user._id}`} key={user._id}>
            {user.username}
          </Link>
          <button onClick={() => this.handleDeleteUser(user._id)}>
            DELETE USER
          </button>
        </div>
      ));
    }
  };

  render() {
    console.log(this.props);
    if (this.props.users.data) {
      return (
        <div>
          <h1>Hello from user list</h1>
          {this.renderUsers()}
          <form onSubmit={this.createUser}>
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
}

export default connect(state => ({ users: state.users }), {
  fetchUsers,
  createUser,
  deleteUser,
})(UserListPage);
