import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap';

class Nav extends React.Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#home">GQL-Starter</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
			</Navbar>
		);
	}
}

module.exports = Nav;
