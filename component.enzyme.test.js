/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, render, shallow } from 'enzyme';
import ImageScreen from './src/screens/ImageScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import SearchScreen from './src/screens/SearchScreen';
import createIconset from './createIconSet';
//import Home from './src/components/Home';

describe('Component tested with airbnb enzyme', () => {
  test('ImageScreen correctly rendered', () => {
    const wrapper = mount(<ImageScreen />)
    expect(wrapper).not.toBe.NULL;
    // other tests operations
  });
  test('ComponentsScreen correctly rendered', () => {
    const wrap = mount(<ComponentsScreen />)
    expect(wrap).not.toBe.NULL;
    // other tests operations
  });
  test('Search SCreen correctly rendered', () => {
    const wrap2 = mount(<SearchScreen />)
    expect(wrap2.filterResultsByTerm(DayCare)).toBe.NULL;
    // other tests operations
  });
});
