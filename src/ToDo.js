import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleActive = this.handleActive.bind(this);
  }

  handleActive() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div className="todo-wrapper">
        <input className="number" type="checkbox" onClick={this.handleActive} />
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
