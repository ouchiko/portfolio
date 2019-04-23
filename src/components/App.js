import React, { Component } from "react";
import Header from './Header.js';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <Header />
            </div>
        );
    }
}

export default App;