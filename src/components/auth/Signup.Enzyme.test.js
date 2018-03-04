import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Signup from './Signup';
import {Link} from 'react-router';

function setup() {
  const props = {
  };

  return shallow(<Signup />);
}

describe('Signup via Enzyme', () => {
  it('renders names & email & password labels', () => {
    const wrapper = setup();
    expect(wrapper.find('#sign-up-first-name').text()).toEqual("First Name");
    expect(wrapper.find('#sign-up-last-name').text()).toEqual("Last Name");
    expect(wrapper.find('#sign-up-email').text()).toEqual("E-mail Address");
    expect(wrapper.find('#sign-up-password').text()).toEqual("Password");
  });

  it('state changes when giving inputs', () => {
    const wrapper = setup();
    wrapper.find("#first-name-input").simulate("change", {target: {value: "Test"}});
    wrapper.find("#last-name-input").simulate("change", {target: {value: "Name"}});
    wrapper.find("#email-input").simulate("change", {target: {value: "test@gmail.com"}});
    wrapper.find("#password-input").simulate("change", {target: {value: "123456"}});
    // test if state changed
    expect(wrapper.state().firstName).toEqual("Test");
    expect(wrapper.state().lastName).toEqual("Name");
    expect(wrapper.state().email).toEqual("test@gmail.com");
    expect(wrapper.state().password).toEqual("123456");
  });

  it('test button function', () => {
    const wrapper = setup();
    wrapper.find("#email-input").simulate("change", {target: {value: "test@gmail.com"}});
    expect(wrapper.find("#guide-sign-up-link").props().to).toBe("/guideSignup/test@gmail.com");
  });
});
