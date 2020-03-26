import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>This is {props.name} and is {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} defaultValue={props.name}></input>
        </div>
    );
}

export default person;