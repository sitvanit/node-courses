import React, {Component} from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Person from './Person/Person';

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
        const personIndex = this.state.persons.findIndex(person => person.id === id);
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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid pink',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            } // we can use it because of Radium
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => <Person
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={event => this.nameChangedHandler(event, person.id)}
                        click={() => this.deletePersonHandler(index)}
                    />)}
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            } // we can use it because of Radium
        }

        // Dynamic style
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            // We need to wrap it with StyleRoot in order to use Radium
            <StyleRoot>
                <div className="App">
                    <h1>Hi, I'm a React App!</h1>
                    <p className={classes.join(' ')}>This is really working</p>
                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons
                    </button>
                    {persons}
                </div>
            </StyleRoot>
        );
    }
}

// Radium wrapping app and inject some extra functionality, styles.
export default Radium(App);
