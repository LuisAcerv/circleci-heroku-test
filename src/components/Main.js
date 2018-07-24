import React from 'react';
import ReactDOM from 'react-dom';
import UsersView from './UsersView';
import CreateUser from './CreateUser';
import { Grid, Row, Col } from 'react-bootstrap';

class Main extends React.Component {
	render() {
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col xs={6} md={6}>
							<CreateUser />
						</Col>
						<Col xs={6} md={6}>
							<UsersView />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

module.exports = Main;
