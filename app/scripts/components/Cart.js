import React from 'react';

import store from '../store';
import CartItems from './CartItems';

const Cart = React.createClass({
  getInitialState: function(){
    //with enzyme, you can test .state([key])
    return store.cartSession;
  },
  componentDidMount: function() {
    store.cartSession.on('change update', () => {
    console.log(store.cartSession.changedAttributes());
    this.setState(store.cartSession);
  });
},
  render: function(){
    let itemsArr = this.state.get('allItems');
    let items = itemsArr.map((currItem,i) => {
      return <CartItems key={i} itemName={currItem.itemName} price={currItem.price} />
    });

    return (
      <div className="cart-container">
        <h2>Your Cart Items:</h2>
        <ul>
          {items}
        </ul>
        <data className="price-display">total price: ${store.cartSession.get('total')}</data>
      </div>
    );
  }
});

export default Cart;
