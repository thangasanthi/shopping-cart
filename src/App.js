import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import ShoppingList from "./components/ShoppingList/index.js";

class App extends Component {
  render() {
    return (
      <div>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;