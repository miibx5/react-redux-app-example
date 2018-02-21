import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from '../src/counter/counter'
import counterReducer from '../src/counter/counterReducer'

const reducers = combineReducers({
    counter: counterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>,
    document.getElementById('app'))