import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  render() {
    return (
      <div className="todo-wrapper" onClick={this.props.status.bind(this)}>
        <span className="number">
          {this.props.id}
        </span>
        <span>
          {this.props.task}
        </span>
        <button className="close" onClick={this.props.status}>
          x
        </button>
      </div>
    );
  }
}

export default ToDo;
