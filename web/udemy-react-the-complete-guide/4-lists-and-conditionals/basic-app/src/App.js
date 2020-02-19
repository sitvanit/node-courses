import React, {Component} from 'react';

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
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid pink',
            padding: '8px',
            cursor: 'pointer'
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
            )
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App!</h1>
                <p>This is really working</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;

// Instead of {persons} we can:
// {
//     this.state.showPersons ?
//         <div>
//             <Person
//                 name={this.state.persons[0].name}
//                 click={this.switchNameHandler.bind(this, 'Max!!!')}/>
//             <Person
//                 name={this.state.persons[1].name}
//                 changed={this.nameChangedHandler}>My Hobbies: Tennis</Person>
//             <Person name="Stephanie"/>
//         </div> : null
// }

// Warning: Each child in a list should have a unique "key" prop.
// The "key" prop is a prop we should add when rendering a list of data.
// It's a default prop react expect to find on an element, when we mapping an array into JSX elements.
// The key prop helps react to update the list efficiently.
// When we delete an elements from the list, it works, but behind the scenes react needs to find what it need to adjust
// in the overall DOM, and what it does is comparing the current DOM to the recent DOM. and it needs to find out which
// element changed. by default it re render the whole list. and if we'll give it the key, it will know what to compare,
// and it re render only what changed.
