import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Progress from '../Progress';

function setup() {
  const props = {
  };

  return mount(<Progress />);
}

/*
describe('Progress via Enzyme', () => {
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
    expect(wrapper.find('.date-title').at(0).text()).toEqual("todo1");
    expect(wrapper.find('.date-title').at(1).text()).toEqual("todo2");
    expect(wrapper.find('.date-title').at(2).text()).toEqual("todo3");
    expect(wrapper.find('.date-title').at(3).text()).toEqual("todo4");
    expect(wrapper.find('.date-title').at(4).text()).toEqual("todo1");
    expect(wrapper.find('.date-title').at(5).text()).toEqual("todo2");
    expect(wrapper.find('.date-title').at(6).text()).toEqual("todo3");
    expect(wrapper.find('.date-title').at(7).text()).toEqual("todo4");
    expect(wrapper.find('.schedule-description').at(0).text()).toEqual("[content]");
    expect(wrapper.find('.schedule-description').at(1).text()).toEqual("[content]");
    expect(wrapper.find('.schedule-description').at(2).text()).toEqual("[content]");
    expect(wrapper.find('.schedule-description').at(3).text()).toEqual("[content]");
    expect(wrapper.find('.schedule-description').at(4).text()).toEqual("[content]");
    expect(wrapper.find('.schedule-description').at(5).text()).toEqual("[content]");
    expect(wrapper.find('.schedule-description').at(6).text()).toEqual("[content]");
    expect(wrapper.find('.schedule-description').at(7).text()).toEqual("[content]");
  }); 
});
*/
