import React, { Component } from "react";

class Website extends Component {
    render() {
        let tags = this.props.tags.map(function(value, i) {
            return (
                <li key={i} className="tag">{value}</li>
            );
        });
        
        return (
            <article className={`website ${this.props.classes}`}>
                <img src={this.props.src} alt={this.props.title}/>
                <h3>{this.props.title}</h3>
                <p>{this.props.caption}</p>
                <ul className="tags">{tags}</ul>
            </article>
        );
    }
}

export default Website;