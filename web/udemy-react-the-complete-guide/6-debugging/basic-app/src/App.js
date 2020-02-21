import React, {Component} from 'react';

import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Max', age: 25},
            {id: 2, name: 'Manu', age: 26},
            {id: 3, name: 'Sitvanit', age: 27}
        ],
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        // const personIndex = this.state.persons.findIndex(person => person.id === id);
        // for debugging - we changed id to userId, and now we have a bug without an error.
        // 1. Dev tools - we can go to Sources and we'll find there under the user all of the code.
        //    We can put a break point at the suspicious line, and we'll have down the debugger tools.
        // 2. React dev tools - we can add it as an extension to chrome and then we'll have the components tab.
        const personIndex = this.state.persons.findIndex(person => person.userId === id);
        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons });
    };

    deletePersonHandler = personIndex => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        let persons = null;
        let buttonClass;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        // in a map the key always has to be in the outer element
                        // use error boundary just in code you know that may failed
                        return <ErrorBoundary key={person.id}><Person
                            name={person.name}
                            age={person.age}
                            changed={event => this.nameChangedHandler(event, person.id)}
                            click={() => this.deletePersonHandler(index)}
                        /></ErrorBoundary>
                    })}
                </div>
            );

            buttonClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App!</h1>
                <p className={assignedClasses.join(' ')}>This is really working</p>
                <button className={buttonClass} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
