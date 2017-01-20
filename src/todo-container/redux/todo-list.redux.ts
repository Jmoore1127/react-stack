import * as _ from 'lodash';
import {
    handleActions,
    createAction
} from "redux-actions";
import {
    IAction,
    IReduxRegistration
} from "../../../config";
import {IClickButton} from "./";

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
  [ClickButtonAction]: (state, action:IAction<IClickButton>) => {
    return _.merge({}, state, {
      buttonClicks: [
        ...state.buttonClicks,
        {
          timestamp: action.payload.timestamp
        }
      ]
    });
  }
}, defaultState);

export {ClickButtonAction, createButtonClick};
export default <IReduxRegistration>{
  reducers: [
    {
      name: stateArea,
      reducer: buttonClickReducer
    }],
  logic: null
}