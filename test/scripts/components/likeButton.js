// //mounting or rendering a react component
// import { shallow } from 'enzyme';
// //always needed for chai library
// import { expect } from 'chai';
// import React from 'react';
//
// import LikeButton from '../../app/scripts/components/LikeButton';
//
//
//
// //describe is a global function that comes with mocha (which is installed globally on computer by spa-scaffold)
//   //arguments
//     //takes a string of what you are writing a test for (just for descriptive purposes)
//     //and a function to run the test
// describe('<LikeButton /> component', function(){
//     //this calls the component (makes an instance of <LikeButton/>)
//   let likeButton = shallow(<LikeButton likes={0} />);
//   let likeButton1 = shallow(<LikeButton likes={1} />);
//   let likeButton5 = shallow(<LikeButton likes={5} />);
//   //it is also a mocha global function (runs a specific test)
//     //also takes a string and a function
//   it('should render a button to the DOM', () => {
//     //I expect wrapper (wrapper comes back as jquery-esque component)
//     expect(likeButton.is('input')).to.be.true;
//     expect(likeButton.is('div')).to.be.false;
//   });
//   it('should have a class of like-button', () => {
//     expect(likeButton.hasClass('like-button').to.be.true);
//   });
//   it('should display the correct number of likes', () => {
//       //equals(node) --tests if it equals the react node..use react syntax with className
//     expect(likeButton.equals(<input className="like-button" type="button" value="0 likes"/>)).to.be.true;
//     expect(likeButton1.equals(<input className="like-button" type="button" value="1 likes"/>)).to.be.true;
//     expect(likeButton5.equals(<input className="like-button" type="button" value="5 likes"/>)).to.be.true;
//   })
// });
