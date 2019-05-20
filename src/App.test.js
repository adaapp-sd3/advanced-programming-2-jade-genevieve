import React from 'react';
import ReactDOM from 'react-dom';
import {shallow } from 'enzyme';
import App from './App';

// it('renders without crashing', () => {
//   // const div = document.createElement('div');
//   // ReactDOM.render(<App />, div);
//   // ReactDOM.unmountComponentAtNode(div);
HTMLCanvasElement.prototype.getContext = jest.fn()

// });
describe('App', () => {

  it('renders without crashing', () => {
    const wrapper = shallow (<App/>)
    console.log(wrapper)
  });

  // it('increments count by 1 when the increment button is clicked', () => {
  //   const wrapper = shallow(<App />);
  //   const incrementBtn = wrapper.find('button.increment');
  //   incrementBtn.simulate('click');
  //   const text = wrapper.find('p').text();
  //   expect(text).toEqual('Count: 1');
  // });

});
