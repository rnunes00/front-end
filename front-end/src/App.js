import React, { Component } from 'react';
import Nav from './Nav'
import Cards from './Cards'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav /> 
      <Cards />
      </div>
    );
  }
}

export default App;
