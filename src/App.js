import React, { Component } from 'react';
import sassStyles from './Second.module.scss';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
