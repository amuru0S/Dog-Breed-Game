import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageQuestion from "./components/ImageQuestion";
import Answers from "./components/Answers";
import Score from "./components/Score";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Dog Game</h1>
          <Score />
          <ImageQuestion onclick={scoreCalculation} />
          <Answers />
        </header>
      </div>
    );
  }
}

export default App;
