import * as _ from 'lodash';
import {combineReducers} from 'redux';
import {createLogicMiddleware} from 'redux-logic';
import {routerReducer} from 'react-router-redux';

import {IReducer} from "./interfaces";

const reduxContext = require.context('../', true, /.*\.redux\.ts$/);

const rootReducer = combineReducers(
    getReducers(reduxContext)
);

function getReducers(reduxContext) {
    return _.chain(reduxContext.keys())
        .map(reduxFile => reduxContext(reduxFile).default.reducers)
        .flatten()
        .filter(reducer => reducer.name && reducer.reducer)
        .reduce(mergeReducerWithHash, {})
        .value();
}


function mergeReducerWithHash(hash:Map<string, IReducer>, reducer:IReducer) {
    return _.merge({}, hash, {[reducer.name]: reducer.reducer});
}

export const reducers = combineReducers({
    app: rootReducer,
    routing: routerReducer
});
