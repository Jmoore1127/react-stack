import * as _ from 'lodash';
import * as React from 'react';
import {Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';
const styles = require('./todo-list.component.scss');

export const TodoLists = ({lists}) => (
  <List className={styles.todoMasterList}>
    {
      _.map(lists, list => (
        <Link key={list.id} to={`/todo/${list.id}`}>
          <ListItem primaryText={list.name}
                    secondaryText={list.items.length + " items"}></ListItem>
        </Link>)
      )
    }
  </List>
);

