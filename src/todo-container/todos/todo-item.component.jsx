import * as React from 'react';
import {
  Card,
  CardTitle
} from 'material-ui/Card';

export const TodoItem = ({item}) => (
  <Card>
    <CardTitle title={item.text}></CardTitle>
  </Card>
);
