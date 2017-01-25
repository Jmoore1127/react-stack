import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {createFetchTodoListAction} from './redux/fetch-todo-lists.redux';
import {ITodoList} from "./redux/todo-list.interface";
import {makeTodoListCountSelector, todoListSelector, todoListsSelector} from "./redux/todo.selectors";
import {TodoPage} from "./todos/todo-page.component";

interface StateProps {
  todoLists: ITodoList[];
  listCount: number;
  selectedTodoList:ITodoList;
}
interface DispatchProps {
}

function mapStateToProps(state,ownProps) {
  return {
    todoLists: todoListsSelector(state),
    listCount: makeTodoListCountSelector()(state),
    selectedTodoList: todoListSelector(state,ownProps.params.id)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTodos: createFetchTodoListAction}, dispatch);
}

export const TodoContainer = connect<StateProps,DispatchProps,any>(mapStateToProps, mapDispatchToProps)(TodoPage);
