import React from 'react';

import store from '../store';

const CartItems = React.createClass({
  removeCartItem: function(){
    // store.cartSession.removeItem(this.props.ItemName, this.props.price);
  },
  render: function(){

    <li>
      <h2>Item: </h2>
      <data>$</data>
      <button onClick={this.removeCartItem}>Remove from Cart</button>
    </li>
  }
});

export default CartItems;
