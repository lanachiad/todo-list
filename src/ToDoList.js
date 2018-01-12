import React, { Component } from 'react';
import ToDo from './ToDo';
import './ToDoList.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], value: '' };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  createTask = e => {
    e.preventDefault();
    const task = {
      id: this.state.todos.length + 1,
      task: this.state.value
    };
    const todos = this.state.todos.concat([task]);
    this.setState({ todos });
    this.setState({ value: '' });
  };

  deleteTask = e => {
    const task = e.currentTarget.parentNode;
    task.remove();
  };

  editTask = e => {
    const id = Number(e.target.parentElement.dataset.id);
    const todos = this.state.todos;
    const newText = e.target.parentElement.querySelector('.task').innerText;
    const taskToUpdate = todos.find(todo => todo.id === id);
  };

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
