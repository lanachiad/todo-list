import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.addStrikeThrough = this.addStrikeThrough.bind(this);
  }

  addStrikeThrough() {
    this.setState({ active: true });
  }

  render() {
    return (
      <div className="todo-wrapper">
        <input className="number" type="checkbox" onClick={this.addStrikeThrough} />
        <span>
          {this.props.task}
        </span>
        <button className="close" onClick={this.props.delete}>
          x
        </button>
      </div>
    );
  }
}

export default ToDo;
