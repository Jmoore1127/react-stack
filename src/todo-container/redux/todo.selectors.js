import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {TodoListSchema} from '../../../config/schema';

export const todoListsSelector = state => denormalize(
  state.app.todos.allLists,
  [TodoListSchema],
  state.app.todos
);

export const todoListSelector = (state, id) => !!id ? denormalize(id, TodoListSchema, state.app.todos) : undefined;

export const makeTodoListCountSelector = () => createSelector(
  todoListsSelector,
  todoLists => todoLists.length
);
