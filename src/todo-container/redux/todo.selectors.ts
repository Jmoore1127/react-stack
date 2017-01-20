import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {ITodoList} from "./todo-list.interface";
import {TodoListSchema} from '../../../config/schema';

export const todoListSelector = (state):ITodoList[] => {
  return denormalize(state.app.todos.allLists,[TodoListSchema],state.app.todos);
};

export const makeTodoListCountSelector = ()=>{
  return createSelector(
      todoListSelector,
      (todoLists:ITodoList[]):number =>{
        return todoLists.length;
      });
};
