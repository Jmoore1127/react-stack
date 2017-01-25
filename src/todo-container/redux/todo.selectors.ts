import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {ITodoList} from "./todo-list.interface";
import {TodoListSchema} from '../../../config/schema';

export const todoListsSelector = (state):ITodoList[] => {
  return denormalize(state.app.todos.allLists,[TodoListSchema],state.app.todos);
};

export const todoListSelector = (state, id):ITodoList => {
  if(!!id) {
    return denormalize(id, TodoListSchema, state.app.todos);
  }else{
    return undefined;
  }
};
export const makeTodoListCountSelector = ()=>{
  return createSelector(
      todoListsSelector,
      (todoLists:ITodoList[]):number =>{
        return todoLists.length;
      });
};
