import React, { Component } from 'react';
import ToDo from './ToDo';
import './ToDoList.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], value: '' };
    this.createTask = this.createTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  createTask(e) {
    e.preventDefault();
    const task = {
      id: this.state.todos.length + 1,
      task: this.state.value
    };
    const todos = this.state.todos.concat([task]);
    this.setState({ todos });
    this.setState({ value: '' });
  }

  deleteTask(e) {
    const task = e.currentTarget.parentNode;
    task.remove();
  }

  editTask(e) {
    const task = e.currentTarget.parentNode.childNodes[1];
    console.log({ task });
  }

  render() {
    return (
      <div>
        <div className="list-wrapper">
          {this.state.todos.map((todo, index) =>
            <ToDo delete={this.deleteTask} edit={this.editTask} id={todo.id} key={index} task={todo.task} />
          )}
        </div>
        <form className="form" onSubmit={this.createTask}>
          <input
            className="input-field"
            onChange={this.handleChange}
            placeholder="Type something"
            type="text"
            value={this.state.value}
          />
          <button className="submit" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default ToDoList;
