import React from "react";
import styled from "styled-components";
// import Contact from "../Contact/";

function Footer() {
	return (
		<BottomWrapper>
			<SectionTitle>
				<h5>CONTACT</h5>
			</SectionTitle>
			<BottomSection>
				<div>
					<ContactInfo>
						<span>
							<b>Location:</b> Elk Grove, CA
						</span>
						<span>
							<b>Email: </b>
							<a href="mailto:landers.mike@gmail.com" target="_top">
								landers.mike@gmail.com
							</a>
						</span>
						<span>
							<b>Phone:</b> 916.541.7604
						</span>
					</ContactInfo>
					<Social>
						<a aria-label="LinkedIn" href="https://linkedin.com/in/mikelanders/">
							<div className="fab fa-linkedin" />
						</a>
						<a aria-label="GitHub" href="https://github.com/mlanders">
							<div className="fab fa-github-square" />
						</a>
						<a aria-label="Twitter" href="https://twitter.com/MikeLanders">
							<div className="fab fa-twitter-square" />
						</a>
						<a aria-label="DEV" title="mlanders's DEV Profile" href="https://dev.to/mlanders">
							<div className="fab fa-dev" />
						</a>
					</Social>
				</div>
				{/* <Contact /> */}
			</BottomSection>
		</BottomWrapper>
	);
}

export default Footer;

const BottomWrapper = styled.div`
	box-sizing: border-box;
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	width: 100%;
	padding: 20px;
	background-color: #f1f1f1;
`;
const BottomSection = styled.section`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	margin: 0 auto;
	justify-content: space-between;
	max-width: 800px;
	width: 100%;
	@media (max-width: 600px) {
		padding: 15px;
		flex-direction: column;
	}
`;
const SectionTitle = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 0 auto 20px;
	font-size: 2rem;
	font-weight: 400;
`;
const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1.8rem;
`;
const Social = styled.section`
	align-self: center;
	margin-top: 5px;
	@media (max-width: 600px) {
		margin-top: 20px;
	}

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
