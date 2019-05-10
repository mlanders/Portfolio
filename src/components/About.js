import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import headshot from "../img/headshot.png";
const fab = {
	marginRight: "10px",
	fontSize: "2.5rem"
};
function About() {
	return (
		<Wrapper>
			<Container>
				<div>
					<Headshot alt='Michael Landers' src={headshot} />
				</div>
				<div>
					<Info>
						<h5>
							<em>ABOUT ME</em>
						</h5>
						<br />
						Developer with a passion for education and crafting friendly
						interfaces
					</Info>
					<Skills>
						<h5>
							<em>LANGUAGES & TOOLS</em>
						</h5>
						<br />
						<i style={fab} className=' fab fa-html5' data-tip data-for='html' />
						<i
							style={fab}
							className='fab fa-css3-alt '
							data-tip
							data-for='css'
						/>
						<i
							style={fab}
							className='fab fa-js-square '
							data-tip
							data-for='js'
						/>
						<i
							style={fab}
							className='fab fa-react '
							data-tip
							data-for='react'
						/>
						<i
							style={fab}
							className='fab fa-node-js '
							data-tip
							data-for='node'
						/>
						<i
							style={fab}
							className='fab fa-python '
							data-tip
							data-for='python'
						/>
						<i
							style={fab}
							className='fas fa-database '
							data-tip
							data-for='database'
						/>
						<i
							style={fab}
							className='fab fa-stripe '
							data-tip
							data-for='stripe'
						/>
						<ReactTooltip place='top' id='html' type='dark' effect='solid'>
							<span>HTML5</span>
						</ReactTooltip>
						<ReactTooltip place='top' id='css' type='dark' effect='solid'>
							<span>CSS3</span>
						</ReactTooltip>
						<ReactTooltip place='top' id='js' type='dark' effect='solid'>
							<span>Javascript</span>
						</ReactTooltip>
						<ReactTooltip place='top' id='react' type='dark' effect='solid'>
							<span>React</span>
						</ReactTooltip>
						<ReactTooltip place='top' id='node' type='dark' effect='solid'>
							<span>Node</span>
						</ReactTooltip>
						<ReactTooltip place='top' id='database' type='dark' effect='solid'>
							<span>AWS RDS, SQLite, Postgres</span>
						</ReactTooltip>
						<ReactTooltip place='top' id='stripe' type='dark' effect='solid'>
							<span>Stripe</span>
						</ReactTooltip>
						<ReactTooltip place='top' id='python' type='dark' effect='solid'>
							<span>Python</span>
						</ReactTooltip>
					</Skills>
				</div>
			</Container>
		</Wrapper>
	);
}

export default About;
const Wrapper = styled.div`
	font-family: "Roboto", sans-serif;
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
