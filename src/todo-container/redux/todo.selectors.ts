import * as _ from 'lodash';
import {createSelector} from 'reselect';
import {ITodoList} from "./todo-list.interface";

export const todoListSelector = (state):ITodoList[] => state.app.todos.todoLists;
export const makeTodoListCountSelector = ()=>{
  return createSelector(
      todoListSelector,
      (todoLists:ITodoList[]):number =>{
        return todoLists.length;
      });
};