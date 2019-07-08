import { css } from 'styled-components';

export const Global = css`
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
    }
    .body {
        background-color: #e8e9eb;
        /* padding-top: 10px; */
        height: 100vh;
        display: flex;
        flex-direction: row;
    }
    .h1 {
        font-size: 2rem;
    }
    .h2 {
        font-size: 1.8rem;
    }
    .h3 {
        font-size: 1.6rem;
    }
    .hidden {
        display: none;
    }
`;
