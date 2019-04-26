import React from 'react';
import styled from 'styled-components';
import headshot from '../img/headshot.png';

function About() {
    return (
        <Wrapper>
            <Container>
                <Headshot alt="Michael Landers" src={headshot} />
                <Info>
                    <h5>
                        <em>ABOUT ME</em>
                    </h5>
                    <br />
                    Developer with a passion for education and crafting friendly
                    interfaces
                </Info>
            </Container>
        </Wrapper>
    );
}

export default About;
const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    display: flex;
    height: 400px;
    align-items: center;
`;
const Container = styled.div`
    display: flex;
    color: #3e434c;
    max-width: 800px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    align-items: center;
`;

const Headshot = styled.img`
    border-radius: 50%;
    height: 150px;
    width: auto;
    margin: 0 20px;
`;

const Info = styled.div`
    font-size: 1.6rem;
    font-weight: 300;
`;
