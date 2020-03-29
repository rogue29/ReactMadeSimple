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

  togglePersonsHandler = () => {
    let toggleVisibility = this.state.visibility;
    this.setState({visibility : !toggleVisibility});
  }

  deletePersonHandler = personAindex => {
    const persons = [...this.state.persons];
    let index = persons.findIndex((p) => p.aindex === personAindex);
    persons.splice(index, 1);
    this.setState({persons : persons});
  }

  render() {

    let persons = null;

    if(this.state.visibility) {
      persons = (<div>
        {this.state.persons.map(p => {
          return <Person
            key={p.aindex}
            name={p.name} 
            age={p.age}
            deleted={() => this.deletePersonHandler(p.aindex)} />
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
