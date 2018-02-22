import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import FieldMask from '../filedMask/fileldMask'
import fieldMaskReducer from '../filedMask/fileldMaskReducer'

const reducers = combineReducers({
    fieldMask: fieldMaskReducer
})

export default props => (
    <Provider store={createStore(reducers)}>
        <div className="container">
            <FieldMask />
        </div>
    </Provider>
);
