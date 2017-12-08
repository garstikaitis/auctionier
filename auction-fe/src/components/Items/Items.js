import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchItems, addItemToUser } from './actions';
import { fetchUsers } from '../../pages/UserListPage/actions';
import { fetchUser } from '../../pages/UserPage/actions';

class Items extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchUsers();
  }

  handleAddItemToUser = async (userId, itemId) => {
    await this.props.addItemToUser(userId, itemId);
    await this.props.fetchUsers();
    this.forceUpdate();
  };

  renderItems = () => {
    if (
      this.props.items.data ||
      this.props.items.data.length !== this.props.items.data.length
    ) {
      return this.props.items.data.map(item => (
        <div>
          <p>Assign {item.name} to: </p>
          <select>{this.renderDropdown()}</select>
          <button
            onClick={() =>
              this.handleAddItemToUser(this.props.match.params.id, item._id)
            }
            type="submit"
          >
            Assign
          </button>
        </div>
      ));
    }
  };

  renderDropdown = () => {
    if (this.props.users.data) {
      return this.props.users.data.map(user => (
        <option key={user._id} value={user._id}>
          {user.username}
        </option>
      ));
    } else {
      return <div>Loading...</div>;
    }
  };

  render() {
    console.log(this.props);
    if (!this.props.items.loading && !this.props.users.loading) {
      return this.renderItems();
    } else {
      return <div>Loading...</div>;
    }
  }
}

const ItemsWithRouter = withRouter(Items);

export default connect(state => ({ items: state.items, users: state.users }), {
  fetchItems,
  fetchUsers,
  addItemToUser,
  fetchUser,
})(ItemsWithRouter);
