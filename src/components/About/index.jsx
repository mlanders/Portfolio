import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import headshot from '../../img/headshot.webp';

function About() {
    return (
        <Styles>
            <div>
                <img
                    className="headshot"
                    alt="Michael Landers"
                    src={headshot}
                />
            </div>
            <div>
                <div className="Info">
                    <div className="h1">ABOUT ME</div>
                    <br />
                    <p>
                        Developer with a passion for education and crafting
                        friendly interfaces. My specialties are Javascript,
                        React, Redux,and Express.
                    </p>
                    <p>
                        After ten years in the customer support industry, I've
                        developed strong problem-solving and communication
                        skills. I look forward to combining those skills to help
                        build visually exciting projects.
                    </p>{' '}
                </div>
                <div className="Skills">
                    <div className="h1">LANGUAGES & TOOLS</div>
                    <br />
                    <i className=" fab fa-html5" data-tip data-for="html" />
                    <i className="fab fa-css3-alt " data-tip data-for="css" />
                    <i className="fab fa-js-square " data-tip data-for="js" />
                    <i className="fab fa-react " data-tip data-for="react" />
                    <i className="fab fa-node-js " data-tip data-for="node" />
                    <i className="fab fa-python " data-tip data-for="python" />
                    <i
                        className="fas fa-database "
                        data-tip
                        data-for="database"
                    />
                    <i className="fab fa-stripe " data-tip data-for="stripe" />
                    <ReactTooltip
                        place="top"
                        id="html"
                        type="dark"
                        effect="solid">
                        <span>HTML5</span>
                    </ReactTooltip>
                    <ReactTooltip
                        place="top"
                        id="css"
                        type="dark"
                        effect="solid">
                        <span>CSS3</span>
                    </ReactTooltip>
                    <ReactTooltip
                        place="top"
                        id="js"
                        type="dark"
                        effect="solid">
                        <span>Javascript</span>
                    </ReactTooltip>
                    <ReactTooltip
                        place="top"
                        id="react"
                        type="dark"
                        effect="solid">
                        <span>React</span>
                    </ReactTooltip>
                    <ReactTooltip
                        place="top"
                        id="node"
                        type="dark"
                        effect="solid">
                        <span>Node</span>
                    </ReactTooltip>
                    <ReactTooltip
                        place="top"
                        id="database"
                        type="dark"
                        effect="solid">
                        <span>AWS RDS, SQLite, Postgres</span>
                    </ReactTooltip>
                    <ReactTooltip
                        place="top"
                        id="stripe"
                        type="dark"
                        effect="solid">
                        <span>Stripe</span>
                    </ReactTooltip>
                    <ReactTooltip
                        place="top"
                        id="python"
                        type="dark"
                        effect="solid">
                        <span>Python</span>
                    </ReactTooltip>
                </div>
            </div>
        </Styles>
    );
}

export default About;
const Styles = styled.div`
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    display: flex;
    height: 400px;
    align-items: center;
    display: flex;
    color: #3e434c;
    max-width: 800px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    align-items: center;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        height: 600px;
    }

    .headshot {
        border-radius: 4%;
        height: 150px;
        width: auto;
        margin: 0 20px;
    }

    .Info {
        font-size: 1.8rem;
        font-weight: 300;
        p {
            margin-bottom: 15px;
            /* font-size: 1.4rem; */
        }
    }

    .Skills {
        font-size: 2.3rem;
        font-weight: 300;
        margin-top: 50px;
    }
`;
