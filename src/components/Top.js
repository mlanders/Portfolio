import React from "react";
import styled from "styled-components";
import trianglify from "../img/trianglify.svg";
import emoji from "node-emoji";

function Top() {
	return (
		<Wrapper>
			<TopSection>
				<Name>Hi, I'm Mike</Name>
				<SubTitle>Full Stack Web Developer</SubTitle>
			</TopSection>
		</Wrapper>
	);
}

export default Top;

const Wrapper = styled.div`
	font-family: "Roboto", sans-serif;
	font-variant-caps: all-small-caps;
	font-weight: 400;
	box-sizing: border-box;
	background-color: #17354f;
	-webkit-clip-path: polygon(0 0, 100% 0, 100% 30px, 0% 100%);
	clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
`;

const TopSection = styled.section`
	max-width: 800px;
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 20px;
`;

const Name = styled.p`
	font-size: 6rem;
	color: #eef1ef;
`;

const SubTitle = styled.p`
	font-weight: 300;
	font-size: 3rem;
	color: #7d98a1;
`;

// https://trianglify.io/p/w:1440!h:900!x:random!v:0.57!c:0.05!s:0.9302820539826686
