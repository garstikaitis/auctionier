import React from 'react';
import Api from '../utils/Api';

class User extends React.Component {
  state = {
    data: [],
    error: '',
    loading: true,
  };

  async componentDidMount() {
    const data = await Api.getSingleUser(this.props.match.params.id);
    this.setState({
      error: '',
      loading: false,
      data,
    });
  }

  renderUserItems = () => {
    if (this.state.data.items) {
      return this.state.data.items.map(item => (
        <div key={item._id}>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ));
    }
  };

  renderUser = () => {
    if (this.state.data) {
      return (
        <div>
          {this.state.data.username} {this.renderUserItems()}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  render() {
    console.log(this.state.data);
    if (this.state.data) {
      return (
        <div>
          <h1>Hello from user</h1>
          {this.renderUser()}
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}

export default User;
