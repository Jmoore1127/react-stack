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
            app:rootReducer,
            routing: routerReducer
        }),
        initialState,
        compose(
            applyMiddleware(...getMiddleware()),
            DevTools.instrument()
        ));

    return store;
}

function getMiddleware(): Middleware[] {
    let middleware = [
        routerMiddleware(browserHistory),
        createLogicMiddleware(rootLogic, {})
    ];

    return middleware;
}

function getReducers(reduxContext) {
    return reduxContext.keys()
        .reduce((previous, reduxFile) => {
            let reducers: Reducer[] = reduxContext(reduxFile).default.reducers;
            let clean = reducers.map((reducer) => {
                let ret = {};
                if (reducer.name && reducer.reducer) {
                    ret[reducer.name] = reducer.reducer;
                }
                return ret;
            });
            return _.merge({}, previous, ...clean);
        }, {});
}

function getLogic(reduxContext) {
    let logic = reduxContext.keys().map((reduxFile) => {
        return reduxContext(reduxFile).default.logic;
    });
    return _.flatten(logic);
}