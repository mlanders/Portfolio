import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Styles>
            <div className="topSection">
                <div className="name">Hi, I'm Mike</div>
                <div className="subTitle">Full Stack Web Developer</div>
            </div>
        </Styles>
    );
}

export default Header;

const Styles = styled.div`
    font-variant-caps: all-small-caps;
    font-weight: 400;
    box-sizing: border-box;
    background-color: #17354f;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 30px, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
    .topSection {
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

    .name {
        font-size: 6rem;
        color: #eef1ef;
    }

    .subTitle {
        font-weight: 300;
        font-size: 3rem;
        color: #7d98a1;
    }
`;
