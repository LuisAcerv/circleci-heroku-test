import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import { ApolloProvider, graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';

//Query
const queryUsers = gql`
	{
		users {
			id
			email
			firstName
			lastName
		}
	}
`;

const Users_ = ({ data: { loading, error, users } }) => {
	if (loading) {
		return <p>Fetching Data...</p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}
	return (
		<ul className="list-group">
			{users.map(user => (
				<li className="list-group-item" key={user.id}>
					<p>
						<b>Email:</b>&nbsp;{user.email}&nbsp;
					</p>
					<p>
						<b>Name:</b>&nbsp;{user.firstName}&nbsp;
					</p>
					<p>
						<b>Last Name:</b>&nbsp;{user.lastName}
					</p>
				</li>
			))}
		</ul>
	);
};

const UsersComp = graphql(queryUsers)(Users_);

class UsersView extends React.Component {
	render() {
		return (
			<div className="listContainer">
				<h3>Registered Users</h3>
				<UsersComp />
			</div>
		);
	}
}

module.exports = UsersView;
