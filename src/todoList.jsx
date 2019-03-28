import React from "react";
import TodoListItem from "./todoListItem.jsx";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      value: "",
      selectedTodo: null
    };

    this.createTodo = this.createTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  generateId(length) {
    return Math.random(length + 1) * 10;
  }

  createTodo(e) {
    e.preventDefault();
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {
          id: this.generateId(this.state.todos.length + 1),
          name: this.state.value
        }
      ]
    }));
    this.setState({ value: "" });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  removeTodo(e, i) {
    e.preventDefault();
    this.todoDup = [...this.state.todos];
    this.todoDup.splice(i, 1);
    this.setState({ todos: this.todoDup });
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <li className="item" key={todo.id}>
          <TodoListItem todo={todo} removeTodo={this.removeTodo} index={i} />
        </li>
      );
    });

    return (
      <div className="todoList-container">
        <div className="create-todo">
          <form onSubmit={this.createTodo}>
            <label>
              I need to...
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button type="submit"> Add Todo </button>
            </label>
          </form>
        </div>
        <div className="todoList-items-container"> {todos} </div>
      </div>
    );
  }
}
