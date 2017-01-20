import * as React from 'react';
import * as _ from 'lodash';
import {ITodoList} from "../redux/todo-list.interface";

export const TodoPage: React.StatelessComponent<{todoLists:ITodoList[],listCount:number}> =
    ({todoLists,listCount}) => {
      return (
          <section>
            <h1>Welcome to the Todo list manager!</h1>
            <h2>Currently there are {listCount} todo lists</h2>
          </section>
      );
    };