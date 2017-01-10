import {createStore, applyMiddleware, compose, Middleware, combineReducers} from 'redux';
import {browserHistory} from "react-router";
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {createLogicMiddleware} from 'redux-logic';
import {DevTools} from "./redux-dev.component";
import {Reducer} from "./reducer";

const rootReducer = combineReducers(
    getReducers(require.context('../', true, /.*\.reducer\.tsx$/))
);

const rootLogic = getLogic(require.context('../', true, /.*\.logic\.tsx/));

export function configureStore(initialState?) {
    const store = createStore(
        combineReducers({
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

function getReducers(reducerContext) {
    return reducerContext.keys()
        .reduce((reducers, reducerFile) => {
            let reducer: Reducer = reducerContext(reducerFile).default;
            return {
                ...reducers,
                [reducer.name]: reducer.reducer
            }
        }, {});
}

function getLogic(logicContext) {
    return logicContext.keys()
        .map((logic) => {
            return logicContext(logic).default;
        });
}