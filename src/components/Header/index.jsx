import React from 'react';
import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';

function Header() {
    return (
        <Styles>
            <div className="header">
                <div className="title">Hi, I'm Mike</div>
                <div className="subTitle">Full Stack Web Developer</div>
            </div>
        </Styles>
    );
}

export default Header;
const fadeInAnimation = keyframes`${fadeIn}`;

const Styles = styled.div`
    font-variant-caps: all-small-caps;
    font-weight: 400;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    background-color: #17354f;
    /* -webkit-clip-path: polygon(0 0, 100% 0, 100% 30px, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%); */
    .header {
        box-sizing: border-box;
        max-width: 800px;
        width: 100%;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
    }

    .title {
        font-size: 6rem;
        color: #eef1ef;
        animation: 1s ${fadeInAnimation};
    }

    .subTitle {
        font-weight: 400;
        font-size: 3rem;
        color: #7d98a1;
        animation: 2s ${fadeInAnimation};
    }
`;
