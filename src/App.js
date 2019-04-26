import React, { useState, useEffect } from 'react';
import Projects from './components/Projects';
import db from './data.js';
import Top from './components/Top';
import Bottom from './components/Bottom';
import About from './components/About';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(db);
    });

    return (
        <>
            <Top />
            <About />
            <Projects data={data} />
            <Bottom />
        </>
    );
}

export default App;
