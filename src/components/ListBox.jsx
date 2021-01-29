import React from "react";
import "./ListBox.css";
const ListBox = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div
          className='todo'
          key={todo.id}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          {todo.content}
        </div>
      );
    })
  ) : (
    <div></div>
  );

  return <div className='listBox box'>{todoList}</div>;
};

export default ListBox;
