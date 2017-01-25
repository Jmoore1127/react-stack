import * as _ from 'lodash';
import * as React from 'react';
import {Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';
import {ITodoList} from "../redux/todo-list.interface";
import {TodoLists} from './todo-list.component';
import {TodoItem} from './todo-item.component';
const styles: any = require('./todo-page.component.scss');

export const TodoPage: React.StatelessComponent<{todoLists: ITodoList[], listCount: number, selectedTodoList:ITodoList, fetchTodos: () => void}> =
  ({todoLists, listCount, selectedTodoList, fetchTodos}) => {
    return (
      <section className={styles.todoPageWrapper}>
        <h2 className={styles.pageTitle}>Welcome to the Todo list manager!</h2>
        <section className={styles.todoWrapper}>
          <TodoLists lists={todoLists}></TodoLists>
          <div className={styles.todoDetail}>
            {
              selectedTodoList && _.map(selectedTodoList.items, (item)=>{
                return (<TodoItem key={item.id} item={item}></TodoItem>)
              })
            }
          </div>
        </section>
      </section>
    );
  };
