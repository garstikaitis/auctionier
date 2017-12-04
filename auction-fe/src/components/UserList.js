import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../utils/Api';

class UserList extends React.Component {
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
    });
  }

  renderUsers = () => {
    if (this.state.data) {
      return this.state.data.map(user => (
        <div>
          <Link to={`/user/${user._id}`} key={user._id}>
            {user.username}
          </Link>
          <button onClick={() => Api.deleteById(user._id)}>DELETE USER</button>
        </div>
      ));
    }
  };

  render() {
    return (
      <div>
        <h1>Hello from user list</h1>
        {this.renderUsers()}
      </div>
    );
  }
}

export default UserList;
