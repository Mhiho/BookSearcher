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
         limit: 1,
         type: 'books',
         order: 'relevance',
         lang: 'en'
     },
     value: '',
     position: 0,
    };
  }
  bookSearch(value) {
    let self = this;
    this.setState({options:{limit: 1}},()=>{
    books.search(value, this.state.options, function(error, results, apiResponse) {
    if ( ! error ) {
      self.setState({books: results})
    } else {
        console.log(error);
    }
});
})
  }
  switchField(value){
    this.setState({options: {field: value}})
  }
  valueUp(value){
    this.setState({value})
  }
  fetchUp(){
    setTimeout(
        ()=>{
          this.setState({options:{ limit: this.state.options.limit + 1}},()=>{
            let self = this;
            books.search(this.state.value, this.state.options, function(error, results, apiResponse) {
              if ( ! error ) {
                self.setState({books: results})
              } else {
                console.log(error);
              }
            });
          })
        }, 1000)
  }
  scroll(){
    this.setState({position: window.pageYOffset})
  }
  render() {
    return (
      <div onClick={this.scroll.bind(this)}>
          <SearchBar valueUp={this.valueUp.bind(this)} bookSearch={this.bookSearch.bind(this)} />

          <Switch switchField={this.switchField.bind(this)} />

          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.fetchUp.bind(this)}
            hasMore={true || false}
            loader={this.state.position > 15 ? (<div className={`${classes.loader}`} key={0}>Loading ...</div>) : null}
          >
              <ListOfBooks books={this.state.books} />
            </InfiniteScroll>
      </div>
    );
  }
}

export default App;
