import React, {Component} from 'react';

// css modules
import classes from './App.css';
import Person from './Person/Person';

// npm run eject - eject from the under the hood configuration, and give you access to the configuration files.
// afterwards 2 directories will be created in the project - config and scripts
// in order to use css modules we should add to config/webpack.config 2 lines in the options of css loader (dev lines 167-168, prod lines 186-187)
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
        let buttonClass;
        // const buttonClass = [classes.Button];

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

            buttonClass = classes.Red;
            // buttonClass.push(classes.Red);
        }

        // Dynamic style
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
