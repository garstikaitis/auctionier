import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from './actions';

class UserPage extends React.Component {
  async componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  renderUser = () => {
    if (this.props.user) {
      return <div>{this.props.user.data.username}</div>;
    } else {
      return <div>Loading...</div>;
    }
  };

  render() {
    if (this.props.user) {
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

export default connect(state => ({ user: state.user }), { fetchUser })(
  UserPage,
);
