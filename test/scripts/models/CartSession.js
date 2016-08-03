import { expect } from 'chai';
import CartSession from '../../../app/scripts/models/CartSession';
import store from '../../../app/scripts/store';


describe('CartSession model', function(){
  it('should exist', () => {
    expect(CartSession).to.exist;
  });
  it('should be an instance on my store', () => {
    expect(store).to.have.property('cartSession');
  });
  it('should respond to its addItem method', () => {
    expect(CartSession).to.respondTo('addItem');
  });
  it('should respond to its removeItem method', () => {
    expect(CartSession).to.respondTo('removeItem');
  });
    // expect(itemsCollection).to.include.keys('itemName');
});
