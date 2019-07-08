import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
    const [state, setState] = useState({ name: '', email: '', message: '' });
    const encode = data => {
        return Object.keys(data)
            .map(
                key =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');
    };

    const handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...state })
        })
            .then(() => alert('Success!'))
            .catch(error => alert(error));

        e.preventDefault();
    };

    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

    return (
        <Styles>
            <form name="contact" onSubmit={handleSubmit}>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={state.name}
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your email address"
                        value={state.email}
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={state.message}
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </Styles>
    );
};

export default Contact;

const Styles = styled.div`
    input {
        border-radius: 4px;
        padding: 5px;
        margin: 5px;
        border: none;
        width: 200px;
    }
    textarea {
        border-radius: 4px;
        padding: 5px;
        margin: 5px;
        border: none;
        width: 200px;
    }
    button {
        border-radius: 4px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #444;
        width: 200px;
        color: #fff;
        background-color: #1356aa;
        cursor: pointer;
        &:hover {
            background-color: #2f6dc4;
        }
    }
`;
