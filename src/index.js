import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { createStore } from 'redux';
import reducer from './reducers/index';
import {Provider} from 'react-redux';

const store = createStore(reducer);

// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)