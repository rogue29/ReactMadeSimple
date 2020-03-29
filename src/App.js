import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {aindex:1,name:"Rohit", age:30},
      {aindex:2,name:"Bharti", age:25},
      {aindex:3,name:"Roharti", age:55},
      {aindex:4,name:"JayDee", age:20},
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

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons : persons});
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
      persons = (<div>
        {this.state.persons.map((p, index) => {
          return <Person
            key={p.aindex}
            name={p.name} 
            age={p.age}
            deleted={() => this.deletePersonHandler(index)} />
        })}
      </div>);
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
