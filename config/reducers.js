import * as _ from 'lodash';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const reduxContext = require.context('../', true, /.*\.redux\.js$/);

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


function mergeReducerWithHash(hash, reducer) {
    return _.merge({}, hash, {[reducer.name]: reducer.reducer});
}

export const reducers = combineReducers({
    app: rootReducer,
    routing: routerReducer
});
