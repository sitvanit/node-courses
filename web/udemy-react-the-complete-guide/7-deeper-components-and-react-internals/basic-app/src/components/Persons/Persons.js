import React, { PureComponent } from 'react'

import Person from './Person/Person';

// PureComponent is a normal component that already implemented shouldComponentUpdate with the complete props checks.
class Persons extends PureComponent {
    // comment because we have warning case the state hasn't been initialize.
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // If we like to check if one of all of the props of a component changed (and not only persons) and then update - we should use PureComponent
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     }
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }

    // The most common use function - when the update fiish and we need to fetch data from the server.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    // for clean up
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.props.changed(event, person.id)}
                click={() => this.props.clicked(index)}
                isAuth={this.props.isAuthenticated}
            />
        });
    }
}

export default Persons;
