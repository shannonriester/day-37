import React from 'react';

import store from '../store';
import CartItems from './CartItems';

const Cart = React.createClass({
  getInitialState: function(){
    //with enzyme, you can test .state([key])
    return {
      itemList: store.cartSession.itemList,
      totalPrice: store.cartSession.totalPrice,
    }
  },
  render: function(){
    let itemsArr = store.itemsCollection.filter((itemObj,i) => {
      console.log('itemObj ', itemObj);
      console.log(itemObj.id);
      console.log(itemObj.itemName);
      console.log(itemObj.Price);
      
      return <CartItems key={i} itemName={itemObj.itemName} price={itemObj.price} id={itemObj.id}  />
    });

    return (
      <div className="cart-container">
        <ul>
          {itemsArr}
        </ul>
      </div>
    );
  }
});

export default Cart;
