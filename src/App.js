import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a test person page.</h1>
        <Person name="Rohit" age="30" />
        <Person name="Bharti" age="25" />
        <Person name="Roharti" age="55">Janmo Janmo ka nata</Person>
      </div>
    );
  }
}

export default App;
