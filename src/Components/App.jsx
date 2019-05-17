import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from './Layout/Navbar';
import { Body } from './Body';

// import '../Styles/App.css';

export class App extends Component {
	render() {
		return (
			<Router>
				<div className='app'>
					<Navbar />
					<Route exact path='/' component={Body} />
				</div>
			</Router>
		);
	}
}
