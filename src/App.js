import React, { Component } from 'react';
import ContainerApp from './components/ContainerApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Welcome to 'guess the Breed'</h1>
        <ContainerApp />
      </div>
    );
  }
}

export default App;
