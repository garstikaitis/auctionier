/* eslint no-restricted-globals: 0 */

import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';

import './dashboard.css';

import { fetchItems } from '../../components/Items/actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  renderItems = () => {
    if (this.props.items.data) {
      return this.props.items.data.map(item => (
        <Card className="card">
          <CardHeader title={item.name} />
          <CardTitle title={item.price} />
          <CardMedia>
            <img class="card-image" src={item.image} />
          </CardMedia>
          <CardActions>
            <RaisedButton label="Details" primary />
            <RaisedButton label="Quick Bid" secondary />
          </CardActions>
        </Card>
      ));
    }
  };
  render() {
    return <div className="items-container">{this.renderItems()}</div>;
  }
}

export default connect(
  state => ({ authentication: state.authentication, items: state.items }),
  { fetchItems },
)(Dashboard);
