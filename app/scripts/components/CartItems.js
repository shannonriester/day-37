import React from 'react';

import store from '../store';

const CartItems = React.createClass({
  removeCartItem: function(){
    store.cartSession.removeItem(this.props.itemName, this.props.price);
  },
  render: function(){
    console.log(this.props);
    return (
      <li>
        <h2>Item: {this.props.itemName}</h2>
        <data>${this.props.price}</data>
        <button onClick={this.removeCartItem}>Remove from Cart</button>
    </li>
    );
  }
});

export default CartItems;
