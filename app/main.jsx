import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/App'

import configureStore from './stores/index';

const store = configureStore();
ReactDOM.render(
 	<Provider store={store}>
		<App />
	</Provider>,
    document.getElementById('root')
);
