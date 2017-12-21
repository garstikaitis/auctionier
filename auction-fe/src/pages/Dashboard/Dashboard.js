/* eslint no-restricted-globals: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Api from '../../utils/Api';
import { fetchUsers, createUser, deleteUser } from './actions';

class Dashboard extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

export default connect(state => ({ authentication: state.authentication }), {})(
  Dashboard,
);
