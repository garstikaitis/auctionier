/* eslint no-restricted-globals: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Api from '../../utils/Api';
import { fetchUsers } from './actions';

class UserListPage extends React.Component {
  constructor(props) {
    super(props);

    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // this.createUser = this.createUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  // handleUsernameChange(event) {
  //   this.setState({ username: event.target.value });
  // }

  // handlePasswordChange(event) {
  //   this.setState({ password: event.target.value });
  // }

  // async createUser(event) {
  //   event.preventDefault();
  //   const credentials = {
  //     username: this.state.username,
  //     password: this.state.password,
  //   };
  //   await Api.createUser(credentials);
  // }

  // handleDeleteUser = id => {
  //   return Api.deleteUser(id);
  // };

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
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button type="submit">Create user</button>
          </form>
        </div>
      );
    }
  }
}

export default connect(state => ({ users: state.users }), { fetchUsers })(
  UserListPage,
);
