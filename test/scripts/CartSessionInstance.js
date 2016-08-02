import { expect } from 'chai';

import store from '../../app/scripts/store';
// store.itemsCollection.add()

describe('cartSession instance', function(){
  // it('should add item (using addItem method) on the CartSession model', () => {
  //
  //   store.cartSession.addItem('carrots', 1);
  //   store.cartSession.on('change', function(){
  //     expect(store.cartSession.get('allItems')).to.eql({'carrots': 1});
  //   });
  //
  // });

  it('should add multiple items and listen for the updates and show all times accordingly', () => {
    store.cartSession.addItem('soap', 2.00);
    store.cartSession.addItem('candy', 5.00);
    store.cartSession.addItem('hairspray', 7.00);
    store.cartSession.addItem('socks', 10.00);
    store.cartSession.on('change', function() {
      expect(store.cartSession.get('allItems')).to.eql({
        'soap': 2.00,
        'candy': 5.00
      });
    });

  });

  it('should remove selected items', () => {
    store.cartSession.removeItem('soap', 2.00);
    store.cartSession.on('change', function(){
      expect(store.cartSession.get('allItems')).to.eql({
        'candy':5.00,
        'shirt': 25.00
      });
    });
  });
  //
  // it('should calculate the total price of all items in the cartSession', () => {
  //   store.cartSession.calcTotalPrice();
  //   store.cartSession.on('change', function(){
  //     expect(store.cartSession.get('total')).to.equal(5);
  //   });
  // });
  it('should respond to the calcTotal function', () => {
    store.cartSession.addItem('milk', 3.00);
    store.cartSession.addItem('razors', 12.00);
    store.cartSession.on('change update', () => {
      expect(store.cartSession.get('total')).to.equal(15);
    });
  });

});
