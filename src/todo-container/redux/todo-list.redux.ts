import * as _ from 'lodash';
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
const stateArea:string = 'todos';

const createFetchTodoListAction = createAction(FetchTodoListAction, () => ({timestamp: new Date()}));
const createFetchTodoListSuccessAction = createAction(FetchTodoListSuccessAction, () => ({timestamp: new Date()}));
const createFetchTodoListErrorAction = createAction(FetchTodoListErrorAction, () => ({timestamp: new Date()}));

const defaultState = {
    todoLists:[]
};

const fetchTodoListSuccessReducer = handleActions({
  [FetchTodoListSuccessAction]: (state, action:IAction<any>) => {
    return _.merge({}, state, {
      todoLists: _.merge([], ...state.todoLists, action.payload.todoLists)
    });
  }
}, defaultState);

export {FetchTodoListAction, FetchTodoListErrorAction, FetchTodoListSuccessAction};
export {createFetchTodoListAction, createFetchTodoListErrorAction, createFetchTodoListSuccessAction}
export default <IReduxRegistration>{
  reducers: [
    {
      name: stateArea,
      reducer: fetchTodoListSuccessReducer
    }],
  logic: null
}