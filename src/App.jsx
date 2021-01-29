import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import "./App.css";
import BodyCard from "./components/BodyCard/BodyCard.jsx";
import { addItem, deleteItem } from "./redux/actions";

class App extends React.Component {
  render() {
    return (
      <div className='background-cover'>
        <BodyCard />
      </div>
    );
  }
}
export default App;
