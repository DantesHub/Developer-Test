import React from "react";
import "./ListBox.css";
const ListBox = ({ wishes, deleteWish }) => {
  const wishList = wishes.length ? (
    wishes.map((wish) => {
      return (
        <div
          className='wish'
          key={wish.id}
          onClick={() => {
            deleteWish(wish.id);
          }}
        >
          {wish.content}
        </div>
      );
    })
  ) : (
    <div></div>
  );

  return <div className='listBox box'>{wishList}</div>;
};

export default ListBox;
