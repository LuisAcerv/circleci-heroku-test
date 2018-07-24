import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FieldGroup, Button } from 'react-bootstrap';
import { ApolloProvider, graphql, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { client } from '../Apollo';

class CreateUser extends React.Component {
	signinUser(event) {
		event.preventDefault();
		var firstName = this.firstName.value;
		var lastName = this.lastName.value;
		var email = this.email.value;
		var password = this.pass.value;
		client
			.mutate({
				mutation: gql`
				mutation {
					createUser(
						firstName: "${firstName}"
						lastName: "${lastName}"
						email: "${email}"
						password: "${password}"
					) {
						firstName
						lastName
						email
						password
					}
				}
				`
			})
			.then(data => {
				var _data = data.data;
				console.log(_data);
				window.location = '/';
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
			<div>
				<h3>Create New User</h3>
				<form onSubmit={this.signinUser.bind(this)}>
					<p>
						<input
							type="text"
							placeholder="Name"
							ref={userInput => (this.firstName = userInput)}
						/>
					</p>
					<p>
						<input
							type="text"
							placeholder="Last Name"
							ref={userInput => (this.lastName = userInput)}
						/>
					</p>
					<p>
						<input
							type="email"
							placeholder="Email"
							ref={userInput => (this.email = userInput)}
						/>
					</p>
					<p>
						<input
							type="password"
							placeholder="Passwords"
							ref={userInput => (this.pass = userInput)}
						/>
					</p>
					<p>
						<input type="submit" />
					</p>
				</form>
			</div>
		);
	}
}

module.exports = CreateUser;
