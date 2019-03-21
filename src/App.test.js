import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);

  test('.App to contain Something', () => {
    const element = wrapper.find('.App');
    expect(element.exists('.App-header')).toBeTruthy();
  });

  test('HTML to be Something', () => {
    const element = wrapper.find('p');
    expect(element.html()).toBe('<p>Edit <code>src/App.js</code> and save to reload.</p>');
  });

  test('Paragraph to be Something', () => {
    const text = wrapper.find('p');
    expect(text.text()).toBe('Edit src/App.js and save to reload.');
  });

  test('Text to be Learn React by Anchor Tag', () => {
    const text = wrapper.find('a');
    expect(text.text()).toBe('Learn React');
  });

  test('Text to be Learn React by CSS Selector', () => {
    const text = wrapper.find('.App-link');
    expect(text.text()).toBe('Learn React');
  });

  test('Anchor tag having A href', () => {
    const element = wrapper.find('a');
    expect(element.prop('href')).toBe('https://react.zonayed.me');
  });
})
