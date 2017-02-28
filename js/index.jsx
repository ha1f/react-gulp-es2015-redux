import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './components/Main.jsx'

const INITIAL_STATE = {
    number: 0
}

const store = createStore((state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLUS':
            return Object.assign({}, state, {
                number: state.number + action.num
            });
        case 'MINUS':
            return Object.assign({}, state, {
                number: state.number - action.num
            });
        default:
            return state
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('react-root')
);
