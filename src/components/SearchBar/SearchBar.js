import React, {Component} from 'react';

import classes from './SearchBar.module.scss';



class SearchBar extends Component {

  state = {
    value: "",
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
  event.preventDefault();
  this.props.valueUp(this.state.value);
  this.props.bookSearch(this.state.value);

  }
  render() {

    return (
      <div className={classes.row} >
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            placeholder="pisz tutaj"
            className={classes.input}
            onChange={this.handleChange.bind(this)}
            type="search"
            value={this.state.value}
            />
            <input
            className={classes.inputSubmit}
            type="submit"
            value="search"
            />
          </form>

      </div>
    )
  }

}

export default SearchBar;
