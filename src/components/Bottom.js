import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';

const BottomWrapper = styled.div`
	width: 100%;
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
const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1.2rem;
`;
const Social = styled.section`
	height: 100px;
	align-self: center;

	a {
		font-size: 4rem;
		text-decoration: none;
		color: black;
		margin: 15px 5px;
	}
`;

const Divider = styled.div`
	border-right: 1px solid gray;
	height: 75px;
	align-self: center;
`;

function Bottom() {
	return (
		<BottomWrapper>
			<BottomSection>
				{/* <Contact /> */}
				<ContactInfo>
					<span>
						<b>Location:</b> Sacramento Region
					</span>
					<span>
						<b>Email:</b>
						<a href='mailto:landers.mike@gmail.com' target='_top'>
							landers.mike@gmail.com
						</a>
					</span>
					<span>
						<b>Phone:</b> 916.541.7604
					</span>
				</ContactInfo>
				<Divider />
				<Social>
					<a
						className='fab fa-linkedin'
						href='https://linkedin.com/in/mikelanders/'
					/>
					<a
						className='fab fa-github-square'
						href='https://github.com/mlanders'
					/>
					<a
						className='fab fa-twitter-square'
						href='https://twitter.com/MikeLanders'
					/>
				</Social>
			</BottomSection>
		</BottomWrapper>
	);
}

export default Bottom;
