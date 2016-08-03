import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

import Cart from '../../../app/scripts/components/Cart';
import store from '../../../app/scripts/store';

describe ('<Cart/> compnoent', function() {

  let cartComponent = shallow(<Cart/>);

  it('should be rendered as a <div></div> in the DOM', () =>{
    expect(cartComponent.is('div')).to.be.true;
    expect(cartComponent.is('ul')).to.be.false;
  });

  it('should have a class name of "cart-container"', () => {
    expect(cartComponent.hasClass('cart-container')).to.be.true;
  });

  it('should have state as the instance of the cartSession', () => {
    expect(cartComponent.state()).to.equal(store.cartSession);
  });


  it('should have the same length of items as the cartSession', () => {
    store.cartSession.addItem('soap', 2.00);
    store.cartSession.addItem('candy', 5.00);
    store.cartSession.addItem('hairspray', 7.00);
    store.cartSession.addItem('socks', 10.00);
    store.cartSession.on('change', ()=>{
      expect(cartComponent.find('ul').children()).to.have.length(store.cartSession.get('allItems').length);
    });

  });

});
