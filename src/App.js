import React, { useState, useEffect } from "react";

// Project data
import db from "./data.js";

// Components
import Projects from "./components/Projects/";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import About from "./components/About/";

// Styles
import { GlobalStyles } from "./styles";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(db);
	});

	return (
		<>
			<GlobalStyles />
			<Header />
			<About />
			<Projects data={data} />
			<Footer />
		</>
	);
}

export default App;
