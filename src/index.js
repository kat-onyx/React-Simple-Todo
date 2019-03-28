import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./todoList.jsx";

import "./styles.css";

//with no backend

function App() {
  return (
    <div className="App">
      <h1>To-Dos</h1>
      <TodoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
