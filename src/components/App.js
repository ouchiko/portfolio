import React, { Component } from "react";

// components
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <section class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                            <p>This is the content area</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default App;