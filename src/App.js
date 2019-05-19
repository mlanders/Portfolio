import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Projects from "./components/Projects";
import db from "./data.js";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import About from "./components/About";

import ReactGA from "react-ga";
ReactGA.initialize("UA-1771173-5");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(db);
	});

	return (
		<SiteWrapper>
			<Top />
			<About />
			<Projects data={data} />
			<Bottom />
		</SiteWrapper>
	);
}

const SiteWrapper = styled.div`
	/* padding: 0 15px; */
`;

export default App;
