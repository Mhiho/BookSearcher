import React, { Component } from 'react';
import classes from './App.module.scss';
import books from 'google-books-search';
import SearchBar from './components/SearchBar/SearchBar';
import ListOfBooks from './components/ListOfBooks/ListOfBooks';
import Switch from './components/Switch/Switch';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      field: 'title',
      lang: 'en'
    };

  const API_KEY = 'AIzaSyAbv1wv1o5lzTgBCniCGLMaW1pVthKgzwY';
  let options = {
      key: API_KEY,
      field: this.state.field,
      offset: 0,
      limit: 10,
      type: 'books',
      order: 'relevance',
      lang: 'en'
  };
  }
  bookSearch(value) {
    let self = this;
    books.search(value, this.options, function(error, results, apiResponse) {
    if ( ! error ) {
      self.setState({books: results})
    } else {
        console.log(error);
    }
});
  }
  switch(option){
    this.setState({field: option})
  }

  render() {
    console.log(this.state.field)
    return (
      <div>
        <SearchBar bookSearch={this.bookSearch.bind(this)}/>
        <Switch switch={this.switch.bind(this)} />
        <ListOfBooks books={this.state.books} />
      </div>
    );
  }
}

export default App;
