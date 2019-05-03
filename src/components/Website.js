import React, { Component } from "react";

class Website extends Component {
    mapTagsAsListItems() {
        return this.props.tags.map(function(value, i) {
            return (
                <li key={i} className="tag">{value}</li>
            );
        })
    }

    render() {
        let tags = typeof this.props.tags !== 'undefined' ? this.mapTagsAsListItems() : false; 
        
        return (
            <article className={`website ${this.props.classes}`}>
                <img src={this.props.src} alt={this.props.title}/>
                <h3 className="title">{this.props.title}</h3>
                <p className="caption">{this.props.caption}</p>
                { tags ? <ul className="tags">{tags}</ul> : `` }
                <a className="button" href={this.props.url} target="_blank"><span>Visit</span></a>
            </article>
        );
    }
}

export default Website;