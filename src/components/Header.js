import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div class="container">
                    <div class="row align-items-end">
                        <div class="col">
                            <a href="/" class="title">
                                <h1>benclark.dev</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;