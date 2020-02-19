// We need to import React in order to render
// useState is for react hooks
import React, {Component, useState} from 'react';

import './App.css';
import Person from './Person/Person';

// React is all about components
// A component is just a function that returns a JSX code
class App extends Component {
    // We can use state only with classes that extends Component
    // State can be changed and if it's changes it makes React to rerender
    // A component with a state is a stateful component, also called smart or container component (contain the state).
    // We use as less as we can of them, because it's easier to maintain the app.
    state = {
        persons: [
            {name: 'Max'},
            {name: 'Manu'}
        ]
    };

    switchNameHandler = newName => {
        // DONT DO THIS:
        // this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: newName},
                {name: 'Manu'}
            ]
        })
    };

    nameChangedHandler = event => {
        this.setState({
            persons: [
                {name: 'Max'},
                {name: event.target.value}
            ]
        })
    };

    // We have to implement the render method, because React will call it to render it to the screen.
    render() {
        // inline style
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid pink',
            padding: '8px',
            cursor: 'pointer'
        };

        // It has to return elements that will be rendered to the screen
        return (
            // That code looks like HTML but it's not - it's JSX - it's JS synthetic sugar - it will be compiled to JS
            // JSX allow us to write HTML code in JS files (the X is for XML).
            // All the elements that we are using (as div..) are provided by the React library, they are not the real HTML tags, React is converting them behind the scenes.
            // But we have some restrictions:
            // 1. Usually we use class instead of className, but class can't be use because it's a reserved word in JS - className is rendered to ba class.
            // 2. Our JSX expression must have one root element. It's a best practice to wrap everything in one root element.
            <div className="App">
                <h1>Hi, I'm a React App!</h1>
                <p>This is really working</p>
                <button style={style} onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
                <Person name={this.state.persons[0].name} click={this.switchNameHandler.bind(this, 'Max!!!')}/>
                <Person name={this.state.persons[1].name} changed={this.nameChangedHandler}>My Hobbies: Tennis</Person>
                <Person name="Stephanie"/>
            </div>
        );
        // The code above is compiled to this code
        // createElement gets an infinite nums of args, but minimum of 3.
        // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App!'));
    }
}

export default App;

// props and state are CORE concepts of React. Actually, only changes in props and/or state trigger React to
// re-render your components and potentially update the DOM in the browser.

// props allow you to pass data from a parent (wrapping) component to a child (embedded) component.
// Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change
// the component, well, state from within. Changes to state also trigger a UI update.

// Although we said that we can manage state just in a component that extends Component.
// We can manage functional component state with react hooks.

// const app = props => {
//     const [personsState, setPersonsState] = useState(
//         {
//             persons: [
//                 {name: 'Max'},
//                 {name: 'Manu'}
//             ]
//         }
//     );
//
//     const switchNameHandler = () => {
//         // setPersonsState does not merge the previous state with this one, it's just replace it.
//         // It's better to use multiple useState for each thing in order to not lose the state
//         setPersonsState({
//             persons: [
//                 {name: 'Maximilain'},
//                 {name: 'Manu'}
//             ]
//         })
//     };
//
//     return (
//         <div className="App">
//             <h1>Hi, I'm a React App!</h1>
//             <p>This is really working</p>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name={personsState.persons[0].name}/>
//             <Person name={personsState.persons[1].name}>My Hobbies: Tennis</Person>
//             <Person name="Stephanie"/>
//         </div>
//     );
// };
//
// export default app;
