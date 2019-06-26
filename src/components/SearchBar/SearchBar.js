import React, {Component} from 'react';
import books from 'google-books-search';
import cut from 'cut-substring';

const API_KEY = 'AIzaSyAbv1wv1o5lzTgBCniCGLMaW1pVthKgzwY';

var options = {
    key: API_KEY,
    field: 'title',
    offset: 0,
    limit: 10,
    type: 'books',
    order: 'relevance',
    lang: 'en'
};

class SearchBar extends Component {

  state = {
    value: "",
    books: [],
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    let self = this;
    books.search("Professional JavaScript for Web Developers", options, function(error, results, apiResponse) {
    if ( ! error ) {
      self.setState({books: results})
    } else {
        console.log(error);
    }
});

  event.preventDefault();
  }

  render() {
    const books = this.state.books;
    console.log(books);
    console.log(this.state.books)
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            onChange={this.handleChange.bind(this)}
            type="search"
            value={this.state.value}
            />
            <input
            type="submit"
            value="search"
            />
          </form>
          <div>
            {

              books.map(book=>{
              const descr = book.description ? book.description.replace(/^(.{100}[^\s]*).*/, "$1") : book.description
              return (
              <div key={book.id}>
                <img src={book.thumbnail} alt="link"/>
                <h3>{book.title}</h3>
                <p>
                {descr}
                </p>
              </div>
            )
            })}
          </div>
      </div>
    )
  }

}

export default SearchBar;
