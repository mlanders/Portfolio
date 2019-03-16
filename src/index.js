import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/cssReset.css';
// import './css/styles.css';

const AppWithRouter = withRouter(App);
const rootElement = document.getElementById('root');
ReactDOM.render(
	<Router>
		<AppWithRouter />
	</Router>,
	rootElement
);
