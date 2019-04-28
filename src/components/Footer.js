import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 copyright">
                            &copy; 2019 Ben Clark 
                        </div>
                        <div className="col-12 col-sm-6 social">
                            <ul>
                                <li>
                                    <a href="mailto:ben@benclark.dev" target="_blank">
                                        <img src="assets/email.svg" alt="Email"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/benclark001/" target="_blank">
                                        <img src="assets/linkedin.svg" alt="LinkedIn"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/bclarkau/" target="_blank">
                                        <img src="assets/github.svg" alt="Github"/>
                                    </a>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;