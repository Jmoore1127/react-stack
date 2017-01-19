import {
    applyMiddleware,
    compose,
    createStore,
    Middleware,
} from 'redux';
import {browserHistory} from "react-router";
import {createLogicMiddleware} from 'redux-logic';
import {routerMiddleware} from 'react-router-redux';

import {DevTools, reducers, rootLogic} from "./";

export function configureStore(initialState?) {
    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(...getMiddleware()),
            DevTools.instrument()
        ));

    return store;
}

function getMiddleware():Middleware[] {
    let middleware = [
        routerMiddleware(browserHistory),
        // createLogicMiddleware(rootLogic, {})
    ];

    return middleware;
}