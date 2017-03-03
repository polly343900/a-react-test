import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);

// Render the main component into the dom
const render = ()=>  {
    return ReactDOM.render(
    <App
        list={store.getState()}
        onInit={() => store.dispatch({ type: 'INIT_LIST' })}
    />,
    document.getElementById('app')
);}

render();
store.subscribe(render)
