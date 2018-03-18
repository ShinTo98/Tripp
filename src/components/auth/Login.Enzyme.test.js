import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Login from './Login';
import {Link} from 'react-router';

function setup() {
  const props = {
  };

  return shallow(<Login />);
}

/*
describe('Login via Enzyme', () => {
  it('renders email & password labels', () => {
    const wrapper = setup();
    expect(wrapper.find('#log-in-email').text()).toEqual("E-mail Address");
    expect(wrapper.find('#log-in-password').text()).toEqual("Password");
  });

  it('state changes when giving inputs', () => {
    const wrapper = setup();
    wrapper.find("#email-input").simulate("change", {target: {value: "test@gmail.com"}});
    wrapper.find("#password-input").simulate("change", {target: {value: "123456"}});
    // test if state changed
    expect(wrapper.state().email).toEqual("test@gmail.com");
    expect(wrapper.state().password).toEqual("123456");
  });

  it('test button function', () => {
    const wrapper = setup();
    wrapper.find("#email-input").simulate("change", {target: {value: "test@gmail.com"}});
    expect(wrapper.find(Link).props().to).toBe("/profile/test@gmail.com");
  });
});
*/
