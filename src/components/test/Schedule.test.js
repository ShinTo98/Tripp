import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Schedule from '../Schedule';

function setup() {
  const props = {
  };

  return mount(<Schedule />);
}

describe('Schedule via Enzyme', () => {
  it('check if chat is correct', () => {
    const wrapper = setup();
		expect(wrapper.find('.user-msg').at(0).text()).toEqual("I want to go to...");
		expect(wrapper.find('.user-msg').at(1).text()).toEqual("And to...");
		expect(wrapper.find('.user-msg').at(2).text()).toEqual("*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ");
		expect(wrapper.find('.other-msg').at(0).text()).toEqual("Sure! ");
		expect(wrapper.find('.other-msg').at(1).text()).toEqual("Nope! ");
  });
	it('check if entries are correct', () => {
    const wrapper = setup();
    expect(wrapper.find('#title0').text()).toEqual("day 1");
    expect(wrapper.find('#title1').text()).toEqual("day 2");
    expect(wrapper.find('#content0').text()).toEqual("[description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description]");
		expect(wrapper.find('#content1').text()).toEqual("[description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description]");

  }); 
  it('check if title is correct', () => {
    const wrapper = setup();
		const title = wrapper.find('#title'); 
		expect(title.text()).toEqual("Date:4/9/2018 - 4/20/2018, 12 days");
  });
});
