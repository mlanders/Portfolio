import React, { useState } from 'react';
import styled from 'styled-components';
import dotenv from 'dotenv';
dotenv.config();

const email = process.env.TO_EMAIL;
console.log(email);
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

function Contact() {
	const [value, setValue] = useState({
		contactName: '',
		contactEmail: '',
		contactSubject: '',
		contactMessage: '',
	});
	const sgMail = require('@sendgrid/mail');
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: email,
		from: value.contactEmail,
		subject: value.contactSubject,
		text: value.contactMessage,
	};

	const handleChange = e => {
		e.preventDefault();
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		sgMail.send(msg);
	};
	return (
		<Form>
			<input
				name="contactName"
				type="text"
				placeholder="Name"
				value={value.contactName}
				onChange={e => handleChange(e)}
			/>
			<input
				name="contactEmail"
				type="email"
				placeholder="Email"
				value={value.contactEmail}
				onChange={e => handleChange(e)}
			/>
			<input
				name="contactSubject"
				type="text"
				placeholder="Subject"
				value={value.contactSubject}
				onChange={e => handleChange(e)}
			/>
			<textarea
				name="contactMessage"
				type="text"
				placeholder="Message"
				value={value.contactMessage}
				onChange={e => handleChange(e)}
			/>
			<button onClick={e => handleSubmit(e)}>Submit</button>
		</Form>
	);
}

export default Contact;
