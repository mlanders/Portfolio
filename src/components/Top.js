import React from 'react';
import styled from 'styled-components';

const TopSection = styled.section`
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	background-image: url(/img/trianglify.svg);
	background-color: #141414;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	color: #3c81e3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	font-size: 6rem;
	font-weight: 300;
	padding: 20px;

	p:nth-child(even) {
		color: #fff;
		font-weight: 300;
		font-size: 4rem;
		margin-top: -50px;
	}
`;
function Top() {
	return (
		<TopSection>
			<p className="name">Mike Landers</p>
			<p className="subTitle">Full Stack Developer</p>
		</TopSection>
	);
}

export default Top;

// https://trianglify.io/p/w:1440!h:900!x:random!v:0.57!c:0.05!s:0.9302820539826686
