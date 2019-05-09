import React from 'react';
import styled from 'styled-components';
import headshot from '../img/headshot.png';
const fab = {
    marginRight: '10px',
    fontSize: '2.5rem'
};
function About() {
    return (
        <Wrapper>
            <Container>
                <div>
                    <Headshot alt="Michael Landers" src={headshot} />
                </div>
                <div>
                    <Info>
                        <h5>
                            <em>ABOUT ME</em>
                        </h5>
                        <br />
                        Developer with a passion for education and crafting
                        friendly interfaces
                    </Info>
                    <Skills>
                        <h5>
                            <em>SKILLS</em>
                        </h5>
                        <br />
                        <i style={fab} className=" fab fa-html5" />
                        <i style={fab} className="fab fa-react " />
                        <i style={fab} className="fab fa-css3-alt " />
                        <i style={fab} className="fab fa-js-square " />
                        <i style={fab} className="fab fa-node-js " />
                        <i style={fab} className="fab fa-python " />
                        <i style={fab} className="fab fa-aws " />
                        <i style={fab} className="fab fa-stripe " />
                    </Skills>
                </div>
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

const Skills = styled.div`
    font-size: 1.6rem;
    font-weight: 300;
    margin-top: 20px;
`;
