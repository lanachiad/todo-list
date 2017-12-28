import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
  }

  handleDelete() {
    this.setState({ done: true });
  }

  render() {
    return (
      <div className="todo-wrapper" doneness={this.state.done}>
        <span className="number">
          {this.props.id}
        </span>
        <span>
          {this.props.task}
        </span>
        <span className="close" onClick={this.handleDelete}>
          x
        </span>
      </div>
    );
  }
}

export default ToDo;
