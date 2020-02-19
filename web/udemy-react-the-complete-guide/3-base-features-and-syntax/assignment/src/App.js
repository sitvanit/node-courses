import React, {Component} from 'react';

import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
    state = {
        userNames: [
            { userName: "Sitvanit" },
            { userName: "Daniel" },
            { userName: "Michael" }
        ]
    };

    inputChangedHandler = event => {
        this.setState({
            userNames: [
                { userName: "Sitvanit" },
                { userName: event.target.value },
                { userName: "Michael" }
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <UserOutput userName={this.state.userNames[0].userName}/>
                <UserInput changed={this.inputChangedHandler} currentName={this.state.userNames[1].userName} />
                <UserOutput userName={this.state.userNames[1].userName}/>
                <UserOutput userName={this.state.userNames[2].userName}/>
            </div>
        );
    }
}

export default App;
