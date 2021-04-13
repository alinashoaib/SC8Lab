import React, { Component } from 'react';
import './App.css';
import UserOutput from './Output/UserOutput';
import UserInput from './Input/UserInput';

class App extends Component {
    state = {
        username: "njbbaer"
    }

    usernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    render() {
        return ( <
            div className = "App" >
            <
            header className = "App-header" >

            <
            UserInput username = { this.state.username }
            changed = { this.usernameHandler }
            /> <
            UserOutput username = { this.state.username }
            /> <
            UserOutput username = { this.state.username }
            /> <
            UserOutput username = { this.state.username }
            /> < /
            header > <
            /div>
        );
    }
}

export default App;