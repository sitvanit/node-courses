import React, { useEffect, useRef, useContext } from 'react'

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);

    const authContext = useContext(AuthContext);

    useEffect(() => {
       toggleButtonRef.current.click();
        console.log(authContext.authenticated);
    }, []);

    // componentDidMount and componentDidUpdate combine in one effect
    // useEffect takes a function as an arg that will run in any render cycle
    // The second arg is an array of the inputs that if they'll change, use effect will be called
    // If we want it to be called just in the first time, the inputs should be an empty array.
    // we can use as many as useEffect that we want
    // we can return a function - and it will be the clean up function.
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // add side effects (e.g. http requests)
        const timer = setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);

        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, [props.personsLength]);

    let buttonClass;
    const assignedClasses = [];

    if (props.showPersons) {
        buttonClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                ref={toggleButtonRef}
                className={buttonClass}
                onClick={props.clicked}>
                    Toggle Persons
            </button>
            {/*<AuthContext.Consumer>*/}
            {/*    {(context) => <button onClick={context.login}>Log in</button>}*/}
            {/*</AuthContext.Consumer>*/}
            <button onClick={authContext.login}>Log in</button>}}
        </div>
    );
};

// react will memorize a snapshot of this component, and only if its input changes it's re-render
export default React.memo(cockpit);
