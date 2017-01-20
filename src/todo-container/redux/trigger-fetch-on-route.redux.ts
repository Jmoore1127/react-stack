import {createLogic} from 'redux-logic';
import {IReduxRegistration} from '../../../config/interfaces/redux-registration.interface';
import {createFetchTodoListAction} from './fetch-todo-lists.redux';
const routerEvent = "@@router/LOCATION_CHANGE";

const triggerTodoLoadOnRouteChangeLogic = createLogic({
  type:routerEvent,
  validate({getState,action},allow,reject){
    if(action.payload.pathname == '/todo'){
      allow(action);
    }else{
      reject(action);
    }
  },
  process({getState,action},dispatch){
    dispatch(createFetchTodoListAction());
  }
});

export default <IReduxRegistration>{
  reducers: [],
  logic: triggerTodoLoadOnRouteChangeLogic
};
