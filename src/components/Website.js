import React, { Component } from "react";


function RenderButtons(props) {
    return (props.buttons) ? props.buttons.map(function(button, i) {
        return (
            <a key={i} className="button" href={button.url} target="_blank">
                <span>{button.label || 'Visit'}</span>
            </a>
        );
    }) : "";
}

function RenderTags(props) {
    return (props.tags) ? props.tags.map(function(value, i) {
        return (
            <li key={i} className="tag">{value}</li>
        );
    }) : "";
}

class Website extends Component {

    constructor(props) {
		super(props);
		this.state = {
            title: props.title
        };
    };

    componentDidMount() {
        // Note how this state change (internally) will change the title repeatitively.
        // If the parent caller defined the title you can chain the process up.
        setInterval(()=>{
            this.setState({
                title: Math.random()
            });
        }, 3000);
    }

    render() {
        return (
            <article className={`website ${this.props.classes}`}>
                <img src={this.props.src} alt={this.props.title}/>
                <h3 className="title">{this.state.title}</h3>
                <p className="caption">{this.props.caption}</p>
                <RenderTags tags={this.props.tags}/>
                <RenderButtons buttons={this.props.buttons}/>
            </article>
        );
    }
}

export default Website;