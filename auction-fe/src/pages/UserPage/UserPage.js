import React from 'react';
import { connect } from 'react-redux';

import Items from '../../components/Items/Items';

import { fetchUser } from './actions';

class UserPage extends React.Component {
  async componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  renderUser = () => {
    if (this.props.user) {
      return (
        <div>
          {this.props.user.data.username} {this.renderUserItems()}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  renderUserItems = () => {
    if (this.props.user.data.items) {
      return this.props.user.data.items.map(item => (
        <div>
          <div>Name: {item.name}</div>
          <div>Price: {item.price}</div>
        </div>
      ));
    }
  };

  render() {
    if (this.props.user) {
      return (
        <div>
          <h1>Hello from user</h1>
          {this.renderUser()}
          <Items />
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}

export default connect(state => ({ user: state.user }), { fetchUser })(
  UserPage,
);
