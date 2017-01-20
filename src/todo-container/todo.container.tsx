import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {createFetchTodoListAction} from './redux/fetch-todo-lists.redux';
import {ITodoList} from "./redux/todo-list.interface";
import {makeTodoListCountSelector, todoListSelector} from "./redux/todo.selectors";
import {TodoPage} from "./todos/todo-page.component";

interface StateProps {
  todoLists: ITodoList[];
  listCount: number;
}
interface DispatchProps {
}

function mapStateToProps(state) {
  return {
    todoLists: todoListSelector(state),
    listCount: makeTodoListCountSelector()(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTodos: createFetchTodoListAction}, dispatch);
}

export const TodoContainer = connect<StateProps,DispatchProps,any>(mapStateToProps, mapDispatchToProps)(TodoPage);
