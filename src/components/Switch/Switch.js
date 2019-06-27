import React, {Component} from 'react';

class Switch extends Component {

  state = {
    option: 'title'
  }
  handleChange(event) {
    this.setState({option: event.target.value})
    this.props.switch(this.state.option)

  }

  render(){
    return (
      <form>
        <select value={this.state.option} onChange={this.handleChange.bind(this)}>
          <option value="author">author</option>
          <option value="title">title</option>
          <option value="language">language</option>
          <option value="publishedDate">publishedDate</option>
          </select>
      </form>
    )
  }
}

export default Switch;
