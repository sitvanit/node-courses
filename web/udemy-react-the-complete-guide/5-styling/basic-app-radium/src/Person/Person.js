import React from 'react';
import Radium, { StyleRoot } from 'radium'; // package to help styling react components

import './Person.css';

const person = props => {
    const style = {
        // media query uses @media rule to include a block of CSS properties only if a certain condition is true.
        // If the min-width is 500px, the width will be 450px
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <StyleRoot>
            <div className="Person" style={style}>
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        </StyleRoot>
    );
};

export default Radium(person);
