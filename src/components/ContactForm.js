import React, { Component } from "react";



export class ContactForm extends Component {
    submit(e) {
        e.preventDefault();
        let form = document.getElementById('contact-form');

        // get values 
        let formValues = {
            name : document.getElementById('form-name').value,
            email : document.getElementById('form-email').value,
            message : document.getElementById('form-message').value,
        };

        // send POST to formcarry
        fetch(form.action, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })
        .then(res => res.json())
        .then(res => console.log(res));
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
                <button type="submit" className="button">
                    <span>Send</span>
                </button>
            </form>
        );
    }
}




