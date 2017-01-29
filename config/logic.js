import * as _ from 'lodash';
import {createLogicMiddleware} from 'redux-logic';

const logicContext = require.context('../', true, /.*\.redux\.js$/);

function getLogic(logicContext) {
  return _.chain(logicContext.keys())
          .map(logicFile => logicContext(logicFile).default.logic)
          .flatten()
          .filter(logic => !!logic)
          .value();
}
///l;ksajdfl;sakdj
export const rootLogic = getLogic(logicContext);
