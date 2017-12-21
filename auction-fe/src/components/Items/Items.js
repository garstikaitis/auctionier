import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormData from 'form-data';

import { fetchItems, addItemToUser, createItem } from './actions';
import { fetchUsers } from '../../pages/Dashboard/actions';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      itemImage: null,
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleCreateItem = this.handleCreateItem.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ price: event.target.value });
  }

  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchUsers();
  }

  handleAddItemToUser = async (userId, itemId) => {
    await this.props.addItemToUser(userId, itemId);
    await this.props.fetchItems();
    await this.props.fetchUsers();
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

  handleFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    this.setState({ itemImage: file });
  }

  handleCreateItem = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('itemImage', this.state.itemImage);
    formData.append('name', this.state.name);
    formData.append('price', this.state.price);
    this.props.createItem(formData);
  };

  renderForm = () => {
    return (
      <form onSubmit={this.handleCreateItem}>
        <TextField
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleUsernameChange}
        />
        <TextField
          type="number"
          placeholder="Price"
          value={this.state.price}
          onChange={this.handlePasswordChange}
        />
        <TextField name="itemImg" type="file" onChange={this.handleFile} />
        <RaisedButton primary type="submit" label="Submit" />
      </form>
    );
  };

  render() {
    if (!this.props.items.loading && !this.props.users.loading) {
      return (
        <div>
          {this.renderItems()} {this.renderForm()}
        </div>
      );
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
  createItem,
})(ItemsWithRouter);
