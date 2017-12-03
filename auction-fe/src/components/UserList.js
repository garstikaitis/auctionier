import React from 'react';
import Api from '../utils/Api';

class UserList extends React.Component {
  state = {
    data: [],
    error: '',
    loading: true,
  };

  componentDidMount() {
    const data = Api.getUsers();
    this.setState({
      ...this.state,
      loading: false,
      data,
    });
  }

  render() {
    console.log(this.state);
    return <div>Hello from user list</div>;
  }
}

export default UserList;
