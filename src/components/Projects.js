import React from "react";
import styled from "styled-components";

function Projects(props) {
	return (
		<Wrapper>
			<SectionTitle>
				<h5>PROJECTS</h5>
			</SectionTitle>
			<ProjectWrapper>
				{props.data.map(item => {
					return (
						<Project key={item.id}>
							<ImgWrapper>
								<IMG alt={item.name} src={item.img} />
							</ImgWrapper>
							{/* <img src={item.img} alt={item.name} /> */}
							<RowContent>
								<h2>{item.name}</h2>
								<p>{item.description}</p>
								<ButtonWrapper>
									<Button href={item.preview}>Visit Site</Button>
									<Button href={item.github}>View Code</Button>
								</ButtonWrapper>
								<Tags>
									{item.tags.map(tag => (
										<i className={` fab ${tag}`} />
									))}
								</Tags>
							</RowContent>
						</Project>
					);
				})}
			</ProjectWrapper>
		</Wrapper>
	);
}

export default Projects;

const ImgWrapper = styled.div`
	box-sizing: border-box;
	max-width: 400px;
	width: 100%;
	display: flex;
	padding: 20px;
	justify-content: center;
	background-color: #fff;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	border-bottom: 2px solid #5e6572;
`;
const IMG = styled.img`
	/* height: auto; */
	width: auto;
`;
const Wrapper = styled.div`
	font-family: "Roboto", sans-serif;
	display: flex;
	box-sizing: border-box;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	width: 100%;
	margin: 0 auto;
	padding: 45px 5px;
	background-color: #a9b4c2;
	-webkit-clip-path: polygon(0% 5%, 100% 0, 100% 100%, 0% 100%);
	clip-path: polygon(0% 30px, 100% 0, 100% 100%, 0% 100%);
`;
const ButtonWrapper = styled.div`
	margin: 10px 0;
	padding: 15px 0 0;
	/* position: sticky; */
	/* top: 100%; */
	display: flex;
	border-top: 1px solid #a9b4c2;
`;
const Button = styled.a`
	text-decoration: none;
	padding: 5px 10px;
	border-radius: 4px;
	font-size: 1.2rem;
	background-color: #1356aa;
	color: #fff;
	margin-right: 5px;
	&:hover {
		text-decoration: none;
		border-radius: 4px;
		background-color: #2f6dc4;
		color: #fff;
	}
`;
const SectionTitle = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
	font-size: 2rem;
	font-weight: 300;
`;
const ProjectWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
const Project = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	max-width: 400px;
	width: 100%;
	padding: 5px;
`;

const RowContent = styled.div`
	box-sizing: border-box;
	display: flex;
	font-weight: 300;
	flex-direction: column;
	font-size: 1rem;
	padding: 10px;
	width: 100%;
	max-height: 400px;
	height: 100%;
	background-color: #eef1ef;
	color: #5e6572;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	h2 {
		font-weight: 500;
		font-size: 1.4rem;
	}
	p {
		font-size: 1.2rem;
		margin: 5px 0;
	}
`;
const Tags = styled.div`
	font-size: 1.4rem;
	i {
		padding: 5px;
	}
`;
