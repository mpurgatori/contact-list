import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import List from '../components/List';
import ContactFrom from '../components/ContactForm';
import { shallow, render, mount } from 'enzyme';


it('renders without crashing', () => {
  shallow(<App />);
});

it('renders the Contact Manager header', () => {
  const wrapper = shallow(<App />);
  const header = <h1 className="mt-5">Contact Manager</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});

it('renders the List component twice', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(List).length).toEqual(2);
});

it('renders the List component twice', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(List).length).toEqual(2);
});

it('renders the ContactFrom component Once', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(ContactFrom).length).toEqual(1);
});