import {
    applyMiddleware,
    compose,
    createStore,
    Middleware,
} from 'redux';
import {browserHistory} from "react-router";
import {createLogicMiddleware} from 'redux-logic';
import {routerMiddleware} from 'react-router-redux';
import {reducers} from './reducers';
import {rootLogic} from './logic';
import {DevTools} from './dev-tools.component';

function configureStore(initialState?) {
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
        createLogicMiddleware(rootLogic, {})
    ];

    return middleware;
}

export const store = configureStore();
