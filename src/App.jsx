import { render } from "@testing-library/react";
import React, { Component, state } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ListBox from "./components/ListBox.jsx";
import "./App.css";
import { addItem, deleteItem } from "./redux/actions";
import AddTodoForm from "./components/AddTodoForm.jsx";
class App extends Component {
  // Aside from styling and reducer.jsx, all code should be written inside of App.jsx.
  //Not sure if this meant we were allowed to use components or not
  state = {
    todos: [{ id: 1, content: "buy some milk" }],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  addTodo = (content) => {
    const todo = {
      content: content,
      id: uuidv4,
    };
    todo.id = uuidv4();
    this.setState({ todos: [...this.state.todos, todo] });
  };
  render() {
    return (
      <div className='background-cover'>
        <div className='bodyCard'>
          <h1 className='title'>MY WISHLIST</h1>
          <ListBox todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodoForm addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}
export default App;
