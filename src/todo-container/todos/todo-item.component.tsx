import * as React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import {ITodoItem} from '../redux/todo-item.interface';

export const TodoItem: React.StatelessComponent<{item: ITodoItem}> =
  ({item}) => {
    return (
      <Card>
        <CardTitle title={item.text}></CardTitle>
      </Card>)
  };
