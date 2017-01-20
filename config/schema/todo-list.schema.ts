import {schema} from 'normalizr';
import {TodoItem} from "./todo-item.schema";

export const TodoList = new schema.Entity('todoLists',{
  items:[TodoItem]
});