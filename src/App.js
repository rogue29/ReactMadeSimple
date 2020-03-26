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
    visibility: false,
  };

  switchPersonStateHandler = () => {
    this.setState({
      persons : [
        {name:"Jack", age:29},
        {name:"Bharti", age:25},
        {name:"Roharti", age:55}
      ],
    });
  }

  togglePersonsHandler = () => {
    let toggleVisibility = this.state.visibility;
    this.setState({visibility : !toggleVisibility});
  }

  switchNameHandler = event => {
    this.setState({
      persons : [
        {name:"Rohit", age:30},
        {name:event.target.value, age:25},
        {name:"Roharti", age:55}
      ],
    });
  }

  render() {

    let persons = null;

    if(this.state.visibility) {
      persons = <div>
                  <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                  <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.switchNameHandler}/>
                  <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Janmo Janmo ka nata</Person>
                </div>
    }

    return (
      <div className="App">
        <h1>This is a test person page.</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
