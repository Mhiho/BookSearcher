import React,{Component} from 'react';

class Switch extends Component {

  state = {
    value: 'title'
  }

  changeHandler(event){
    this.setState({value: event.target.value},()=>{
      this.props.switchField(this.state.value);
    })

  }
  render(){
    return (
      <select onChange={this.changeHandler.bind(this)} value={this.state.value}>
        <option value="author">author</option>
        <option value="title">title</option>
      </select>
    )
  }
}

export default Switch;
