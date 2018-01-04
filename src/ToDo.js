import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      editable: false,
      value: this.props.task
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleCompletedState = () => {
    const currentState = this.state.completed;
    this.setState({ completed: !currentState });
  };

  handleEditableState = () => {
    const currentState = this.state.editable;
    this.setState({ editable: !currentState });
  };

  render() {
    const input = this.state.editable
      ? <input onChange={this.handleChange} value={this.state.value} />
      : <p className="task">
          {this.props.task}
        </p>;
    return (
      <div className={this.state.completed ? 'complete todo-wrapper' : 'todo-wrapper'}>
        <input className="check" type="checkbox" onClick={this.handleCompletedState} />
        {input}
        <button className="close" onClick={this.props.delete}>
          x
        </button>
        <button className="edit" onClick={this.handleEditableState}>
          &#9998;
        </button>
      </div>
    );
  }
}

export default ToDo;
