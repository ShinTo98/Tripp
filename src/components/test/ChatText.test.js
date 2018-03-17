import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ChatText from '../ChatText';

function setup(s, c) {
  const props = {
		side: s, 
		content: c
  };

  return shallow(<ChatText {...props}/>);
}

/*
describe('Chattext via Enzyme', () => {
  it('check if chattext for user is correct', () => {
    const wrapper = setup('user-msg', 'aaa');
		expect(wrapper.find('div').text()).toEqual('aaa');
		expect(wrapper.find('div').hasClass('user-msg')).toEqual(true);
  });
  it('check if chattext for other is correct', () => {
    const wrapper = setup('other-msg', 'bbb');
		expect(wrapper.find('div').text()).toEqual('bbb');
		expect(wrapper.find('div').hasClass('other-msg')).toEqual(true);
  });
});
*/
