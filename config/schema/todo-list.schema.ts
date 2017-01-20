import {schema} from 'normalizr';
import {TodoItemSchema} from "./todo-item.schema";

export const TodoListSchema = new schema.Entity('todoLists',{
  items:[TodoItemSchema]
});
