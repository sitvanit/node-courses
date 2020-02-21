import React, {Component} from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

// we write regular css here and not js
const StyledBotton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid pink;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
    }
`;

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
            <div className="App">
                <h1>Hi, I'm a React App!</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <StyledBotton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </StyledBotton>
                {persons}
            </div>
        );
    }
}

export default App;
