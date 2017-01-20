import {ITodoItem} from "./todo-item.interface";
export interface ITodoList {
  id:number;
  name:string;
  items:ITodoItem[]
}