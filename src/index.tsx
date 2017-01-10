import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from '../config/store';
import {Router, Route, browserHistory} from "react-router";
import {AppComponent} from "./app.component";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);

ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={AppComponent}></Route>
        {/*<Route path="/"*/}
               {/*getComponent={(location,cb)=>System.import('../src/app.component').then((module)=>cb(null,module.default)).catch((err)=>console.error("Error loading app component"))}>*/}
        {/*</Route>*/}
    </Router>
    </Provider>,
    document.getElementById("app")
);
