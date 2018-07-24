import React from 'react';
import ReactDOM from 'react-dom';
import { client, store } from './Apollo';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Nav';

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Navbar />
					<Route exact path="/" component={Main} />
				</div>
			</BrowserRouter>
		</Provider>
	</ApolloProvider>,
	document.getElementById('app')
);

module.hot.accept();
