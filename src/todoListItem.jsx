import React from "react";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    };

    this.completedTask = this.completedTask.bind(this);
  }

  completedTask() {
    this.setState({ completed: !this.state.completed });
  }

  render() {
    let buttonType = null;
    if (this.state.completed === true) {
      buttonType = (
        <button onClick={this.completedTask}>Oops, I'm not finished.</button>
      );
    } else {
      buttonType = <button onClick={this.completedTask}>Completed!</button>;
    }
    return (
      <div className="todoItem-container">
        <div className="todo-item-button-container">
          {buttonType}
          <button onClick={e => this.props.removeTodo(e, this.props.index)}>
            Remove it!
          </button>
        </div>
        <div className={`completed-${this.state.completed}`}>
          {this.props.todo.name}
        </div>
      </div>
    );
  }
}
