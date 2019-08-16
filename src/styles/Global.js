import { css } from 'styled-components';

export const Global = css`
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
    }
    html {
        font-size: 62.5%;
        line-height: 1.45;
    }
    .body {
        background-color: #e8e9eb;
        /* padding-top: 10px; */
        height: 100vh;
        display: flex;
        flex-direction: row;
    }
    .h1 {
        font-size: 2.5rem;
    }
    .h2 {
        font-size: 2.3rem;
    }
    .h3 {
        font-size: 2rem;
    }
    p {
        font-size: 1.8rem;
    }

    .hidden {
        display: none;
    }
`;
