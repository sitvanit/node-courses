import React, {Component} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClassComponent';
import AuthContext from '../context/auth-context';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');

        this.state = {
            persons: [
                {id: 1, name: 'Max', age: 25},
                {id: 2, name: 'Manu', age: 26},
                {id: 3, name: 'Sitvanit', age: 27}
            ],
            showPersons: false,
            showCockpit: true,
            changeCounter: 0,
            authenticated: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    // The most common use function - when the update fiish and we need to fetch data from the server.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => person.id === id);
        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        // behind the scenes setState not triggered update and re-render cycle. it's schedule by React.
        // also using this.state inside, it's not guaranteed to have the latest value of the state.
        // this.setState({
        //     persons,
        //     changeCounter: this.state.changeCounter + 1
        // });
        this.setState((prevState, props) => {
            return {
                persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
    };

    deletePersonHandler = personIndex => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };

    loginHandler = () => {
        this.setState({
            authenticated: true
        })
    };

    render() {
        console.log('[app.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
                isAuthenticated={this.state.authenticated}
            />;

        }

        const cockpit = <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
        />;

        const removeCockpitButton = <button
            onClick={() => {
                this.setState({ showCockpit: false })}
            }>
            Remove Cockpit
        </button>;

        return (
            <WithClass classes={classes.App}>
                {removeCockpitButton}
                <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
                    {this.state.showCockpit ? cockpit : null}
                    {persons}
                </AuthContext.Provider>
            </WithClass>
        );
    }
}

export default App;
