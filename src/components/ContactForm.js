import React, { Component } from "react";



export class ContactForm extends Component {
    submit(e) {
        e.preventDefault();
        let form = document.getElementById('contact-form');
        let fields = {
            name : document.getElementById('form-name'),
            email : document.getElementById('form-email'),
            message : document.getElementById('form-message'),
            submit : document.getElementById('form-submit'),
        };
        let thanks = document.getElementById('thanks');

        // disable all fields and change thanks text
        fields.submit.disabled = true;
        thanks.textContent = 'Sending...';

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
            thanks.textContent = 'Sent. Thank you!';
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
                <div class="footer">
                    <button id="form-submit" type="submit" className="button">
                        <span id="form-submit-text">Send</span>
                    </button>
                    <span id="thanks"></span>
                </div>
            </form>
        );
    }
}




