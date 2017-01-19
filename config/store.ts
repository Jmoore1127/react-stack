import * as _ from 'lodash';
import {createStore, applyMiddleware, compose, Middleware, combineReducers} from 'redux';
import {browserHistory} from "react-router";
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {createLogicMiddleware} from 'redux-logic';
import {DevTools} from "./redux-dev.component";
import {Reducer} from "./reducer.interface";

const reduxContext = require.context('../', true, /.*\.redux\.ts$/);

const rootReducer = combineReducers(
    getReducers(reduxContext)
);

const rootLogic = getLogic(reduxContext);

export function configureStore(initialState?) {
    const store = createStore(
        combineReducers({
            app: rootReducer,
            routing: routerReducer
        }),
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

function getReducers(reduxContext) {
    return _.chain(reduxContext.keys())
        .map(reduxFile => reduxContext(reduxFile).default.reducers)
        .flatten()
        .filter(reducer => reducer.name && reducer.reducer)
        .reduce(mergeReducerWithHash, {})
        .value();
}

function mergeReducerWithHash(hash:Map<string,Reducer>, reducer:Reducer) {
    return _.merge({}, hash, {[reducer.name]: reducer.reducer});
}

function getLogic(reduxContext) {
    return _.chain(reduxContext.keys())
        .map(reduxFile => reduxContext(reduxFile).default.logic)
        .flatten()
        .value();
}