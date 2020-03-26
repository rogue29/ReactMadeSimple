import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name:"Rohit", age:30},
      {name:"Bharti", age:25},
      {name:"Roharti", age:55},
      {name:"JayDee", age:20},
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
      persons = this.state.persons.map(p => { 
        return <Person name={p.name} age={p.age} />
      })
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
