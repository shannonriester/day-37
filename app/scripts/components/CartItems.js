import React from 'react';

import store from '../store';

const CartItems = React.createClass({
  removeItem: function(){
    let removedItem = store.itemsCollection.get(this.props.id);
    console.log(removedItem);
  },
  render: function(){
    <li>
      <h2>{this.props.item.ItemName}</h2>
      <data>{this.props.item.price}</data>
      <button onClick={this.removeItem}>Remove from Cart</button>
    </li>
  }
});

export default CartItems;
