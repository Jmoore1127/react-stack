import * as _ from 'lodash';
import {normalize} from 'normalizr';
import {createLogic} from 'redux-logic';
import {
  handleActions,
  createAction
} from "redux-actions";
import {TodoListSchema} from '../../../config/schema';

const FetchTodoListAction = "FETCH_TODO_LISTS";
const FetchTodoListSuccessAction = "FETCH_TODO_LISTS_SUCCESS";
const FetchTodoListErrorAction = "FETCH_TODO_LISTS_ERROR";
const stateArea = 'todos';

const createFetchTodoListAction = createAction(FetchTodoListAction, () => ({timestamp: new Date()}));
const createFetchTodoListSuccessAction = createAction(FetchTodoListSuccessAction, () => ({timestamp: new Date()}));
const createFetchTodoListErrorAction = createAction(FetchTodoListErrorAction, () => ({timestamp: new Date()}));

const defaultState = {
  allLists: [],
  todoLists: {},
  todoItems: {}
};

const fetchTodoListReducer = handleActions({
  [FetchTodoListSuccessAction]: (state, action) => {
    let normalized = normalize(action.payload,[TodoListSchema]);
    let updated = {...normalized.entities, allLists:normalized.result};
    return _.merge({}, state, updated );
  }
}, defaultState);

const fetchTodoListsLogic = createLogic({
  name: 'fetchTodos',
  type          : FetchTodoListAction,
  latest        : true,
  processOptions: {
    dispatchReturn: true,
    successType   : FetchTodoListSuccessAction,
    failType      : FetchTodoListErrorAction
  },
  process({getState, action}, dispatch, done){
    //normally would be a fetch
    return [
      require('../../../config/mock/todo-list-1.json'),
      require('../../../config/mock/todo-list-2.json')
    ];
  }
});

export {FetchTodoListAction, FetchTodoListErrorAction, FetchTodoListSuccessAction};
export {createFetchTodoListAction, createFetchTodoListErrorAction, createFetchTodoListSuccessAction}
export default {
  reducers: [
    {
      name   : stateArea,
      reducer: fetchTodoListReducer
    }
  ],
  logic   : fetchTodoListsLogic
}
