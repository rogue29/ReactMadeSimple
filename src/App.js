import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name:"Rohit", age:30},
      {name:"Bharti", age:25},
      {name:"Roharti", age:55}
    ],
  };

  switchPersonStateHandler = () => {
    console.log("was clicked?");
  }

  render() {
    return (
      <div className="App">
        <h1>This is a test person page.</h1>
        <button onClick={this.switchPersonStateHandler}>Switch person state</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Janmo Janmo ka nata</Person>
      </div>
    );
  }
}

export default App;
