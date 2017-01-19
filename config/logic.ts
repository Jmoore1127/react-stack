import * as _ from 'lodash';
import {createLogicMiddleware} from 'redux-logic';

const logicContext = require.context('../', true, /.*\.logic\.ts$/);

function getLogic(logicContext) {
    return _.chain(logicContext.keys())
        .map(logicFile => logicContext(logicFile).default)
        .flatten()
        .value();
}

export const rootLogic = getLogic(logicContext);