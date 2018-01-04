import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleActiveState = this.handleActiveState.bind(this);
  }

  handleActiveState() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div className={this.state.active ? 'complete todo-wrapper' : 'todo-wrapper'}>
        <input className="check" type="checkbox" onClick={this.handleActiveState} />
        <p className="task">
          {this.props.task}
        </p>
        <button className="close" onClick={this.props.delete}>
          x
        </button>
        <button className="edit" onClick={this.props.edit}>
          &#9998;
        </button>
      </div>
    );
  }
}

export default ToDo;
