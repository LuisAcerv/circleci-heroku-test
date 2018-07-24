import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider, graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createHttpLink } from 'apollo-link-http';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ReduxCache, apolloReducer } from 'apollo-cache-redux';
import ReduxLink from 'apollo-link-redux';
import { onError } from 'apollo-link-error';

// NOTE: this data should be replaced by the server ip or domain
const URL = 'glacial-ridge-29816.herokuapp.com'; // set your server url here

const store = createStore(
	combineReducers({
		apollo: apolloReducer
	}),
	{}, // initial state
	composeWithDevTools()
);

const cache = new ReduxCache({ store });

const reduxLink = new ReduxLink(store);

const errorLink = onError(errors => {
	console.log(errors);
});

const httpLink = createHttpLink({
	uri: `http://${URL}/graphql`,
	opts: {
		credentials: 'same-origin'
	}
});

const link = ApolloLink.from([reduxLink, errorLink, httpLink]);

const client = new ApolloClient({
	link,
	cache
});

module.exports = { client, store };
