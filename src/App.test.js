import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchBar from './components/SearchBar/SearchBar'
import BookItem from './components/BookItem/BookItem';
import ListOfBooks from './components/ListOfBooks/ListOfBooks';
import Switch from './components/Switch/Switch';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


  test("searchBar", () => {
    const component = create(<SearchBar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  test("bookItem", () => {
    const component = create(<BookItem />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  test("ListOfBooks", () => {
    const component = create(<ListOfBooks />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  test("switch", () => {
    const component = create(<Switch />);
    expect(component.toJSON()).toMatchSnapshot();
  });
