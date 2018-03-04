import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path="/" component={App} />
			</div>
		</BrowserRouter>
	</Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
