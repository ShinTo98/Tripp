import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Chat from '../common/Chat';

function setup() {
  const props = {
  };

  return mount(<Chat />);
}

describe('Chat via Enzyme', () => {
  it('check if chat is correct', () => {
    const wrapper = setup();
		expect(wrapper.find('.user-msg').at(0).text()).toEqual("I want to go to...");
		expect(wrapper.find('.user-msg').at(1).text()).toEqual("And to...");
		expect(wrapper.find('.user-msg').at(2).text()).toEqual("*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ");
		expect(wrapper.find('.other-msg').at(0).text()).toEqual("Sure! ");
		expect(wrapper.find('.other-msg').at(1).text()).toEqual("Nope! ");
  });
  it('check for chatting', () => {
    const wrapper = setup();
		const chatinput = wrapper.find('.chat-input'); 
		chatinput.value = 'hahahahaha'; 
		const form = wrapper.find('input[type="submit"]').get(0); 
		//form.prop('onClick')(); 
		//expect(wrapper.find('.user-msg').at(3).text()).toEqual("hahahahaha");
  });
});
