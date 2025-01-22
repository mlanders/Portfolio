import React, { useState, useEffect } from "react";

// Project data
import db from "./data.js";

// Components
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(db);
	});

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />
			<About />
			<Projects data={data} />
			<Footer />
		</div>
	);
}

export default App;
