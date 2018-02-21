import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import FieldMask from '../src/filedMask/fileldMask'
import fieldMaskReducer from '../src/filedMask/fileldMaskReducer'

const reducers = combineReducers({
    fieldMask: fieldMaskReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <FieldMask />
    </Provider>,
    document.getElementById('app'))