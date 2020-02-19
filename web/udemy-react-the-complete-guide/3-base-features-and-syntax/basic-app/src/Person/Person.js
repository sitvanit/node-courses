// We have to import react in any component we'll created because it will compile the JSX
import React from 'react';

import './Person.css';

// We can manage functional component state with react hooks.
const person = props => {
    // In order to use this JSX we have to import React
    // if it was a class we should have use it as this.props.name
    // The children is any elements between the opening and closing tags of the component
    // A component without a state is a stateless component, we call it also dump or presentational component
    // It's a good practice to create as many of stateless components.
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {Math.floor(Math.random() * 30)} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;
