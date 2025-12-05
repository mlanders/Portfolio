import { useState, FormEvent, ChangeEvent } from "react";
import styled from "styled-components";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data: Record<string, string>): string => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => setState({ ...state, [e.target.name]: e.target.value });

  return (
    <Styles>
      <form name="contact" onSubmit={handleSubmit}>
        <p>
          <input
            aria-label="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={state.name}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            aria-label="email"
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
            aria-label="message"
            name="message"
            placeholder="Message"
            value={state.message}
            onChange={handleChange}
          />
        </p>
        <p>
          <button aria-label="Send" type="submit">
            Send
          </button>
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
