import React, { Component } from 'react';
import classes from './App.module.scss';
import books from 'google-books-search';
import SearchBar from './components/SearchBar/SearchBar';
import ListOfBooks from './components/ListOfBooks/ListOfBooks';
import Switch from './components/Switch/Switch';
import {config} from './config';
import InfiniteScroll from 'react-infinite-scroller';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      options: {
         key: config.API_KEY,
         field: 'title',
         offset: 0,
         limit: 3,
         type: 'books',
         order: 'relevance',
         lang: 'en'
     },
     value: ''
    };
  }
  bookSearch(value) {
    let self = this;
    books.search(value, this.state.options, function(error, results, apiResponse) {
    if ( ! error ) {
      self.setState({books: results})
    } else {
        console.log(error);
    }
});
  }
  switchField(value){
    this.setState({options: {field: value}})
  }
  valueUp(value){
    this.setState({value})
  }
  fetchUp(){
    this.setState({options:{ limit: this.state.options.limit + 3}},()=>{
      let self = this;
      books.search(this.state.value, this.state.options, function(error, results, apiResponse) {
      if ( ! error ) {
        self.setState({books: results})
      } else {
          console.log(error);
      }
  });
    })
  }

  render() {
    console.log(this.state.options.limit)
    console.log(this.state.value);
    return (
      <div>
          <SearchBar valueUp={this.valueUp.bind(this)} bookSearch={this.bookSearch.bind(this)}/>

          <Switch switchField={this.switchField.bind(this)} />

          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.fetchUp.bind(this)}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
              <ListOfBooks books={this.state.books} />
            </InfiniteScroll>
      </div>
    );
  }
}

export default App;
