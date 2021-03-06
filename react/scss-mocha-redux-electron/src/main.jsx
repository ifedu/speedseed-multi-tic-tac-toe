import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import appReducer from './views/app.reducer'

import Table from './views/game/components/table/table'

const reducer = combineReducers({ appReducer })
const store = createStore(reducer)

render(
    <div>
        <Provider store={store}>
            <Table/>
        </Provider>
    </div>,
    document.querySelector('ss-table')
)
