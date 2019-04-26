import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col copyright">
                            &copy; Ben Clark 
                        </div>
                        <div className="col social">
                            Social links 
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;