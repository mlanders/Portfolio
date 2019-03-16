import React from 'react';
import styled from 'styled-components';

const Mid = styled.div`
	display: flex;
	justify-content: center;
	/* flex-direction: column; */
	flex-wrap: wrap;
	width: 100%;
	margin: 0 auto;
	padding: 5px;
`;
const Button = styled.a`
	text-decoration: none;
	padding: 5px 10px;
	border-radius: 4px;
	font-size: 1.2rem;
	background-color: #3c81e3;
	color: #fff;
	margin: 0 5px;
	&:hover {
		text-decoration: none;
		/* padding: 5px 10px; */
		border-radius: 4px;
		background-color: #2f6dc4;
		color: #fff;
	}
`;

const Row = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	max-width: 500px;
	width: 100%;
	margin: 20px 10px 50px;
	padding: 5px;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 20px -1px;

	/* &:nth-child(even) {
		flex-direction: row-reverse;
	} */

	img {
		height: auto;
		width: 100%;
		// border-radius: 4px;
		// box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 20px -1px;
	}
`;

const RowContent = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	font-size: 1.2rem;
	/* justify-content: space-between; */
	/* max-width: 800px;
	width: 100%; */
	/* height: 300px; */
	padding: 0 10px 10px 10px;

	h2 {
		font-weight: 300;
	}
	p {
		font-size: 1.3rem;
	}
`;
const Tags = styled.div`
	font-size: 1.6rem;
	i {
		padding: 5px;
	}
`;
function Projects(props) {
	return (
		<Mid>
			{props.data.map(item => {
				return (
					<Row key={item.id}>
						<h2>{item.name}</h2>

						<img src={item.img} alt={item.name} />
						<RowContent>
							{/* <h2>{item.name}</h2> */}
							<p>{item.description}</p>
							<div className='rowBtns'>
								<Button href={item.github}>GitHub</Button>
								<Button href={item.preview}>View</Button>
								<Tags>
									{item.tags.map(tag => (
										<i className={` fab ${tag}`} />
									))}
								</Tags>
							</div>
						</RowContent>
					</Row>
				);
			})}
		</Mid>
	);
}

export default Projects;
