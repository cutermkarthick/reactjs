import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers'


let store = createStore(todoApp)
let approot = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>, approot);
registerServiceWorker();
