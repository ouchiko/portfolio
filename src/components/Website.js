import React, { Component } from "react";

class Website extends Component {
    renderTagsAsListItems() {
        return this.props.tags.map(function(value, i) {
            return (
                <li key={i} className="tag">{value}</li>
            );
        })
    }

    renderButtons() {
        return this.props.buttons.map(function(button, i) {
            return (
                <a key={i} className="button" href={button.url} target="_blank">
                    <span>{button.label || 'Visit'}</span>
                </a>
            );
        })
    }

    render() {
        let tags = typeof this.props.tags !== 'undefined' ? this.renderTagsAsListItems() : false; 
        let buttons = typeof this.props.buttons !== 'undefined' ? this.renderButtons() : false; 
        
        return (
            <article className={`website ${this.props.classes}`}>
                <img src={this.props.src} alt={this.props.title}/>
                <h3 className="title">{this.props.title}</h3>
                <p className="caption">{this.props.caption}</p>
                { tags ? <ul className="tags">{tags}</ul> : `` }
                { buttons }
            </article>
        );
    }
}

export default Website;