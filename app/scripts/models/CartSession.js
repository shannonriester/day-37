import Backbone from 'Backbone';
import _ from 'underscore';
import $ from 'jquery';

import store from '../store';

const CartSession = Backbone.Model.extend({
  idAttribute: '',
  defaults: {
    total: 0,
    allItems: [],
  },
  addItem: function(item, price){
    // console.log(item, price);
    let newItem = {
       item : item,
      price : price
    };
    this.get('allItems').push(newItem);

  },
  removeItem: function(item, price){
    // console.log(this.get('allItems'));
    let removeItem = {
      item: item,
      price: price
    }
    this.get('allItems').splice(removeItem-1,1);
  },
  calcTotalPrice: function(){
    let totalPrice = this.get('allItems').reduce((previousVal, currentVal, i) => {
      return previousVal.price + currentVal.price
    });
    this.set('total', totalPrice);

  },
});

export default CartSession;
