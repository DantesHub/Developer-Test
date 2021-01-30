import React, { useState } from "react";
import "./AddWishForm.css";

const AddWishForm = (props) => {
  const [content, setContent] = useState("");
  const handleChange = (evt) => {
    setContent(evt.target.value);
  };
  const handleAdd = (evt) => {
    evt.preventDefault();
    if (content.trim() === "") {
      alert("Wish for something!");
      return;
    }
    let duplicate = false;
    props.wishes.map((wish) => {
      if (wish.content.trim() === content.trim()) {
        alert("Can't have two of the same wishes!");
        duplicate = true;
      }
    });

    setContent("");
    if (!duplicate) {
      props.addWish(content);
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.clearList();
    if (props.wishes.length) {
      alert("Wish List Submitted to Santa!");
    } else {
      alert("Wish List Cannot be Empty");
    }
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

export default AddWishForm;
