import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import SearchResult from '../SearchResult';
import SearchResultItem from '../SearchResultItem';

function setup(destination, start_time, end_time) {
  const props = {
    destination: destination || "",
    start_time: start_time || "",
    end_time: end_time || ""
  };

  return shallow(<SearchResult {...props}/>);
}

// describe('SearchResult via Enzyme', () => {
  
//   it('check if SearchResult on San Diego', () => {
//     const wrapper = setup("San Diego");
// 		expect(wrapper.find('SearchResultItem').length).toBe(3);
// 		// expect(wrapper.find('div').hasClass('user-msg')).toEqual(true);
//   });
//   it('check if SearchResult on Baker Street', () => {
//     const wrapper = setup("Baker Street");
// 		expect(wrapper.find('SearchResultItem').length).toBe(4);
// 		// expect(wrapper.find('div').hasClass('other-msg')).toEqual(true);
//   });
// });
