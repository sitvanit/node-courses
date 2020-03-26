import React, {Component} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    // We don't have to call the constructor, and we can set the state outside of it without the this (as we done in the previous chapter)
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');

        this.state = {
            persons: [
                {id: 1, name: 'Max', age: 25},
                {id: 2, name: 'Manu', age: 26},
                {id: 3, name: 'Sitvanit', age: 27}
            ],
            showPersons: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate')
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate')
    }

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

    // The render should be lean and not include a lot of JSX
    render() {
        console.log('[App.js] 3 render');
        let persons = null;

        if (this.state.showPersons) {
            console.log('[App.js] all of Apps children render');
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />;
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}

export default App;

/** Stateful and Stateless **/
// This component is stateful because we have a state inside of it.
// Historically stateful (container) components must have been classes, but not anymore (since react 16.8).
// The majority of your components should be stateless.
// It's easier to manage your state just from one place. before you manage a state from a component think.
// Class-based components can access to state and have lifecycle hooks.
// Functional components can access to state with useState (since react hooks) but don't have lifecycle hooks.
// In class-based components we access state and props via 'this' and in functional components via 'props'.
// Use class-based components if you need to manage state or access to lifecycle hooks and you don't use React Hooks.
// Use functional components in all other cases.

/** Lifecycle Hooks **/
// Lifecycle Hooks have nothing to do with React Hooks

// Component Lifecycle
// We have this methods that only available in Class-based Components:

// Creation
// 1. constructor(props) executes (default es6 class feature) - you have to call super(props) - you can set initial state but don't create side effects (http call, saving to DB...)
// 2. getDerivedStateFromProps(props, state) - call it in order to sync state - don't cause side effects
// 3. render()
// 4. render child component
// 5. componentDidMount() - here you can cause side-effects - but not update state because it triggers re-render

// update
// 1. getDerivedStateFromProps(props, state) - update state with props - don't cause side effects
// 2. shouldComponentUpdate(nextProps, nextState) - decide whether to continue or not with the update - don'e cause side effects
// 3. render
// 4. update child components props
// 5. getSnapshotBeforeUpdate(prevProps, prevState) - last-minute DOM ops - don't cause side effects
// 6. componentDidUpdate() - cause side effects - don't update state (trigger re-render)
