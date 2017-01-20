import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from '../config/store';
import {Router, Route, browserHistory} from "react-router";
import {rootRoute} from '../config/routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);

//TODO extract routes to separate file, make components lazy load
ReactDOM.render(
    <Provider store={store}>
    <Router history={history} routes={rootRoute}>
    </Router>
    </Provider>,
    document.getElementById("app")
);
