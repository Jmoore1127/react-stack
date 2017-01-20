import * as _ from 'lodash';
import {createLogicMiddleware} from 'redux-logic';

const logicContext = require.context('../', true, /.*\.redux\.ts$/);

function getLogic(logicContext) {
  return _.chain(logicContext.keys())
          .map(logicFile => logicContext(logicFile).default.logic)
          .flatten()
          .filter(logic => !!logic)
          .value();
}

export const rootLogic = getLogic(logicContext);
