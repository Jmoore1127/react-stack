import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {createFetchTodoListAction} from './redux/fetch-todo-lists.redux';
import {makeTodoListCountSelector, todoListSelector, todoListsSelector} from "./redux/todo.selectors";
import {TodoPage} from "./todos/todo-page.component";

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

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoPage);
