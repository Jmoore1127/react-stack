import * as _ from 'lodash';
import * as React from 'react';
import {Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';
import {ITodoList} from "../redux/todo-list.interface";
const styles: any = require('./todo-list.component.scss');

export const TodoLists: React.StatelessComponent<{lists: ITodoList[]}> =
  ({lists}) => {
    return (
          <List className={styles.todoMasterList}>
            {
              _.map(lists, (list: ITodoList) => {
                return (<Link key={list.id} to={`/todo/${list.id}`}><ListItem  primaryText={list.name}
                                                                               secondaryText={list.items.length + " items"}></ListItem></Link>);
              })
            }
          </List>)
  };
