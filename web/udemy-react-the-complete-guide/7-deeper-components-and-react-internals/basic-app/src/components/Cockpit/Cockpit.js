import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = props => {
    // useEffect cover all the class base lifecycle hooks in one func
    // useEffect is a function that will run in every render cycle of the component
    // we can use useEffect more than once.
    // this code will run only when persons changes - because we add it in the second arg.
    // if we'll send an empty array [] instead of [props.persons], it will run only in the first time, and then no matter what changes, it won't run again.
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // we can use side effects here
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);

        // clean up - will run before the main useEffect function runs, but after the first render cycle
        return () => {
            // it will be shown when the cockpit remove
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, [props.persons]);



    let buttonClass;
    const assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    if (props.showPersons) {
        buttonClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={buttonClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;
