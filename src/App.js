import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Projects from './components/projects/Projects';
import db from './data.js';
import Top from './components/Top';
import Bottom from './components/Bottom';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	font-family: 'Roboto', sans-serif;

`;

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(db);
	});

	return (
		<React.Fragment>
			<GlobalStyle />
			<Top />
			<Route exact path="/" render={props => <Projects {...props} data={data} />} />
			<Bottom />
		</React.Fragment>
	);
}

export default App;
