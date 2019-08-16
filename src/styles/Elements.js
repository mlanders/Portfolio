import { css } from 'styled-components';

export const Elements = css`
    .fab {
        font-size: 3rem;
        margin: 10px;
    }
    .btn {
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 1.8rem;
        background-color: #1356aa;
        box-shadow: 1px 1px 4px gray;
        color: #fff;
        margin: 5px 5px 5px 0;
        &:hover {
            text-decoration: none;
            border-radius: 4px;
            background-color: #2f6dc4;
            color: #fff;
        }
    }
`;
