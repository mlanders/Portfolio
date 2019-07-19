import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Project data
import db from './data.js';

// Components
import Projects from './components/Projects/';
import Header from './components/Header/';
import Footer from './components/Footer/';
import About from './components/About/';

// Styles
import { GlobalStyles } from './styles';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-1771173-5');
ReactGA.pageview(window.location.pathname + window.location.search);

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
