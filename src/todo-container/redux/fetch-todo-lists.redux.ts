import * as _ from 'lodash';
import {createLogic} from 'redux-logic';
import {
  handleActions,
  createAction
} from "redux-actions";
import {
  IAction,
  IReduxRegistration
} from "../../../config";

const FetchTodoListAction = "FETCH_TODO_LISTS";
const FetchTodoListSuccessAction = "FETCH_TODO_LISTS_SUCCESS";
const FetchTodoListErrorAction = "FETCH_TODO_LISTS_ERROR";
const stateArea: string = 'todos';

const createFetchTodoListAction = createAction(FetchTodoListAction, () => ({timestamp: new Date()}));
const createFetchTodoListSuccessAction = createAction(FetchTodoListSuccessAction, () => ({timestamp: new Date()}));
const createFetchTodoListErrorAction = createAction(FetchTodoListErrorAction, () => ({timestamp: new Date()}));

const defaultState = {
  todoLists: []
};

const fetchTodoListReducer = handleActions({
  [FetchTodoListSuccessAction]: (state, action: IAction<any>) => {
    return _.merge({}, state, {
      todoLists: action.payload
    });
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
    let todos = [
      require('../../../config/mock/todo-list-1.json'),
      require('../../../config/mock/todo-list-2.json')
    ];
    return todos;
  }
});

export {FetchTodoListAction, FetchTodoListErrorAction, FetchTodoListSuccessAction};
export {createFetchTodoListAction, createFetchTodoListErrorAction, createFetchTodoListSuccessAction}
export default <IReduxRegistration>{
  reducers: [
    {
      name   : stateArea,
      reducer: fetchTodoListReducer
    }
  ],
  logic   : fetchTodoListsLogic
}
