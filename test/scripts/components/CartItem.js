import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

import CartItems from '../../../app/scripts/components/CartItems';
import store from '../../../app/scripts/store';

describe('<CartItems/> component', function() {
  let cartItems = shallow(<CartItems />);

  it('should exist', () => {
    expect(cartItems).to.exist;
  });
  // it('should have an item prop', () => {
  //   store.cartModel.on('change update', () => {
  //     expect(cartItems.find('li')).to.have.length(store.cartModel.get('items').length);
  //   });
  // });
});
