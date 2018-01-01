import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  render() {
    return (
      <div className="todo-wrapper">
        <input className="number" type="checkbox" />
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
