import React from 'react';

const Contact = () => {
    return (
        <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/">
            <p style={{ visibility: 'hidden' }}>
                <label>
                    Don’t fill this out if you're human:{' '}
                    <input name="bot-field" />
                </label>
            </p>
            <p>
                <label>Email: </label>
                <input type="email" name="email" required />
            </p>
            <p>
                <label>Message: </label>
                <textarea name="message" required />
            </p>
            <p>
                <button type="submit">Submit</button>
            </p>
        </form>
    );
};

export default Contact;
