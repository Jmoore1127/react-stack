import * as _ from 'lodash';
import * as React from 'react';
import {TodoLists} from './todo-list.component';
import {TodoItem} from './todo-item.component';
const styles = require('./todo-page.component.scss');

export const TodoPage = ({todoLists, listCount, selectedTodoList, fetchTodos}) => (
  <section className={styles.todoPageWrapper}>
    <h2 className={styles.pageTitle}>Welcome to the Todo list manager!</h2>
    <section className={styles.todoWrapper}>
      <TodoLists lists={todoLists}></TodoLists>
      <div className={styles.todoDetail}>
        {
          selectedTodoList && _.map(selectedTodoList.items, (item) => {
            return (<TodoItem key={item.id} item={item}></TodoItem>)
          })
        }
      </div>
    </section>
  </section>
);
