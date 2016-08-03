import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

import CartItems from '../../../app/scripts/components/CartItems';
import store from '../../../app/scripts/store';

describe('<CartItems />', () => {
  let cartItems = shallow(<CartItems/>);

  if('should be a <div></div> element', () => {
    expect(cartItems.is('div')).to.be.true;
    expect(cartItems).to.exist;
  });

});
