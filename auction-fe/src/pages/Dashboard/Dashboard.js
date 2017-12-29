/* eslint no-restricted-globals: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';

import Api from '../../utils/Api';
import { fetchUsers, createUser, deleteUser } from './actions';

class Dashboard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title="URL Avatar" subtitle="Subtitle" />
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <RaisedButton label="Action1" />
          <RaisedButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}

export default connect(state => ({ authentication: state.authentication }), {})(
  Dashboard,
);
