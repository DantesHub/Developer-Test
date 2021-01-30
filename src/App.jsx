import { render } from "@testing-library/react";
import React, { Component, state } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ListBox from "./components/ListBox.jsx";
import "./App.css";
import { addItem, deleteItem } from "./redux/actions";
import AddWishForm from "./components/AddWishForm.jsx";
class App extends Component {
  // Aside from styling and reducer.jsx, all code should be written inside of App.jsx.
  //Not sure if this meant we were allowed to use components or not
  deleteWish = (id) => {
    this.props.deleteItem(id);
  };

  addWish = (content) => {
    const item = {
      id: uuidv4(),
      content: content,
    };
    this.props.addItem(item);
  };

  clearList = () => {
    //we could also make another action for this call
    for (const wish of this.props.wishes) {
      this.deleteWish(wish.id);
    }
    return;
  };
  render() {
    console.log(this.props.wishes);
    return (
      <div className='background-cover'>
        <div className='bodyCard'>
          <h1 className='title'>MY WISHLIST</h1>
          <ListBox wishes={this.props.wishes} deleteWish={this.deleteWish} />
          <AddWishForm
            addWish={this.addWish}
            wishes={this.props.wishes}
            clearList={this.clearList}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    wishes: state.wishList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    },
    addItem: (item) => {
      dispatch(addItem(item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
