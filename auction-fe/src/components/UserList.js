/* eslint no-restricted-globals: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../utils/Api';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  state = {
    data: [],
    error: '',
    loading: true,
  };

  async componentDidMount() {
    const data = await Api.getUsers();
    this.setState({
      error: '',
      loading: false,
      data,
      username: '',
      password: '',
    });
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
    await Api.createUser(credentials);
  }

  handleDeleteUser = id => {
    return Api.deleteUser(id);
  };

  renderUsers = () => {
    if (this.state.data) {
      return this.state.data.map(user => (
        <div>
          <Link to={`/user/${user._id}`} key={user._id}>
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
    return (
      <div>
        <h1>Hello from user list</h1>
        {this.renderUsers()}
        <form onSubmit={this.createUser}>
          <input
            onChange={this.handleUsernameChange}
            value={this.state.username}
            type="text"
            placeholder="username"
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button type="submit">Create user</button>
        </form>
      </div>
    );
  }
}

export default UserList;
