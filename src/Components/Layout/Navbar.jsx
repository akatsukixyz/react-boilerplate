import React, { Component } from 'react';

import '../../Styles/Navbar.css';

export class Navbar extends Component {
	render() {
		return (
			<div id='navbar'>
				<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
					<a className='navbar-brand' href='/'>
						React
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item active'>
								<a href='/' className='nav-link'>
									Home
								</a>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link dropdown-toggle'
									href='/'
									id='navbarDropdown'
									role='button'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'>
									Account
								</a>
								<div
									className='dropdown-menu'
									aria-labelledby='navbarDropdown'>
									<a href='/' className='dropdown-item'>
										Register
									</a>
									<a href='/' className='dropdown-item'>
										Login
									</a>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
