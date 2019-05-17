import React, { Component } from "react";
import { getCurves } from "crypto";

function ThankYouSegment(props) {
    return (
        <div id="thanks">{props.thankYouText}</div>
    );
}

function SubmitButton(props) {
    return (
        <button id="form-submit" type="submit" className="button" disabled={props.submitDisabled}>
            <span id="form-submit-text">Send</span>
        </button>
    );
}

export class ContactForm extends Component {

    constructor(props) {
		super(props);
		this.state = {
            thankYouText: "Waiting..",
            submitDisabled: false
        }

        this.submit = this.submit.bind(this);
    };

    submit(e) {
        e.preventDefault();
        let form = document.getElementById('contact-form');
        let fields = {
            name : document.getElementById('form-name'),
            email : document.getElementById('form-email'),
            message : document.getElementById('form-message'),
            submit : document.getElementById('form-submit'),
        };

        this.setState({
            thankYouText: "Now Sending..",
            submitDisabled: true
        });

        // send 
        fetch(form.action, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name : fields.name.value,
                email : fields.email.value,
                message : fields.message.value,
            })
        })
        .then(res => {
            // change button and thanks text
            this.setState({
                thankYouText: "It's been sent!"
            });
        });
    }

    render() {
        return (
            <form id="contact-form" action="https://formcarry.com/s/c0dze8VmNx_" method="POST" acceptCharset="UTF-8" onSubmit={this.submit}>
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input id="form-name" type="text" name="name" required />
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input id="form-email" type="email" name="email" required />
                <label htmlFor="message">Message</label>
                <textarea id="form-message" name="message" rows="10"></textarea>
                <div className="footer">
                    <SubmitButton disabled={this.state.submitDisabled}/>
                    <ThankYouSegment thankYouText={this.state.thankYouText}/> 
                </div>
            </form>
        );
    }
}




