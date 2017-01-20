import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {syncHistoryWithStore} from 'react-router-redux';
import {store} from '../config/store';
import {Router, browserHistory} from "react-router";
import {rootRoute} from '../config/routes';
import './main.scss';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={rootRoute}>
        </Router>
    </Provider>,
    document.getElementById("app")
);
