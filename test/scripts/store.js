import { expect } from 'chai';

import store from '../../app/scripts/store';

describe('store module', function() {
  it('should exist', () => {
    expect(store).to.exist;
  });
  it('should have a session property', () => {
    expect(store).to.have.property('cartSession');
  });
  // it('should have a itemsCollection property', () => {
  //   expect(store).to.have.property('itemsCollection');
  // });

});
