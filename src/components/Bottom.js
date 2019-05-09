import React from 'react';
import styled from 'styled-components';

function Bottom() {
    return (
        <BottomWrapper>
            <SectionTitle>
                <h5>CONTACT</h5>
            </SectionTitle>
            <BottomSection>
                <ContactInfo>
                    <span>
                        <b>Location:</b> Elk Grove, CA
                    </span>
                    <span>
                        <b>Email:</b>
                        <a href="mailto:landers.mike@gmail.com" target="_top">
                            landers.mike@gmail.com
                        </a>
                    </span>
                    <span>
                        <b>Phone:</b> 916.541.7604
                    </span>
                </ContactInfo>
                <Divider />
                <Social>
                    <a href="https://linkedin.com/in/mikelanders/">
                        <div className="fab fa-linkedin" />
                    </a>
                    <a href="https://github.com/mlanders">
                        <div className="fab fa-github-square" />
                    </a>
                    <a href="https://twitter.com/MikeLanders">
                        <div className="fab fa-twitter-square" />
                    </a>
                    <a
                        title="mlanders's DEV Profile"
                        href="https://dev.to/mlanders">
                        <div className="fab fa-dev" />
                    </a>
                </Social>
            </BottomSection>
        </BottomWrapper>
    );
}

export default Bottom;

const BottomWrapper = styled.div`
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    width: 100%;
    padding-top: 20px;
    background-color: #f1f1f1;
`;
const BottomSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 800px;
    width: 100%;
`;
const SectionTitle = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 300;
`;
const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
`;
const Social = styled.section`
    align-self: center;
    margin-top: 5px;

    a {
        font-size: 4rem;
        text-decoration: none;
        color: black;
        margin: 15px 5px;
    }
    a:hover {
        color: #7d98a1;
    }
`;

const Divider = styled.div`
    border-right: 1px solid gray;
    height: 75px;
    align-self: center;
`;
