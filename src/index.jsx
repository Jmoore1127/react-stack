import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from "react-redux";
import {syncHistoryWithStore} from 'react-router-redux';
import {store} from '../config/store';
import {Router, browserHistory} from "react-router";
import {rootRoute} from '../config/routes';
import './main.scss';

//TODO remove once material ui no longer requires this
//Temporary and required for Material-UI
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const history = syncHistoryWithStore(browserHistory, store);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} routes={rootRoute}>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById("app")
  );
};

render();

if(process.env.NODE_ENV == 'development'){
  //TODO require async routes here so hot reload works properly for async stuff
}

if (process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept('../config/routes', ()=>{
    let newRoute = require('../config/routes');
    Object.assign(rootRoute, newRoute.rootRoute);
    browserHistory.replace(location);
    render();
  });
}
