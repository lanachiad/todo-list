import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  render() {
    return (
      <div className="todo-wrapper">
        <span className="number">
          {this.props.id + 1}
        </span>
        <span>
          {this.props.task}
        </span>
        <span className="close">x</span>
      </div>
    );
  }
}

export default ToDo;
