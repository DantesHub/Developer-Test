import React, { useState } from "react";
import "./AddTodoForm.css";

const AddTodoForm = (props) => {
  const [content, setContent] = useState("");
  const handleChange = (evt) => {
    setContent(evt.target.value);
  };
  const handleAdd = (evt) => {
    evt.preventDefault();
    setContent("");
    props.addTodo(content);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(content, "yo");
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='input' onChange={handleChange} value={content} />
      <button className='add button' onClick={handleAdd}>
        <h2>Add</h2>
      </button>
      <button className='submit button' type='submit'>
        <h2>Submit</h2>
      </button>
    </form>
  );
};

export default AddTodoForm;
