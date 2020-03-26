import React, { Component } from 'react'
import Person from './Person/Person';

class Persons extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate');
        return (nextProps.persons !== this.props.persons);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot);
    }

    // clean up
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
                click={() => this.props.clicked(index)}/>
        });
    }
}

export default Persons;

// const persons = props => {
//     console.log('[Persons.js] rendering...');
//     return props.persons.map((person, index) => {
//         return <Person
//             name={person.name}
//             age={person.age}
//             key={person.id}
//             changed={event => props.changed(event, person.id)}
//             click={() => props.clicked(index)}/>
//     });
// };
//
// export default persons;
