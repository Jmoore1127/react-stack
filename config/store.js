import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import {browserHistory} from "react-router";
import {createLogicMiddleware} from 'redux-logic';
import {routerMiddleware} from 'react-router-redux';
import {reducers} from './reducers';
import {rootLogic} from './logic';
import {DevTools} from './dev-tools.component';

function configureStore(initialState) {
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(...getMiddleware()),
            DevTools.instrument()
        ));
}

function getMiddleware() {
    return [
        routerMiddleware(browserHistory),
        createLogicMiddleware(rootLogic, {})
    ];
}

export const store = configureStore();
