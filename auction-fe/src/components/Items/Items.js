import React from 'react';
import { connect } from 'react-redux';

import { fetchItems } from './actions';

class Items extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    if (this.props.items.data[1]) {
      return <div>{this.props.items.data[1].name}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default connect(state => ({ items: state.items }), { fetchItems })(
  Items,
);
