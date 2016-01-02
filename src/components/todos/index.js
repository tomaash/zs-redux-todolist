import {connect} from 'react-redux';
import todoActions from '../../actions/todo-actions';
import TodosComponent from './todos-component';

// Map Redux state to component props
function mapStateToProps(state)  {
  return {
    todos: state.todoReducer.todos,
    currentTodo: state.todoReducer.currentTodo
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onLoadClick: () => dispatch(todoActions.fetchTodos()),
    currentChange: (e) =>
      dispatch(todoActions.currentTodoChange(e.target.value)),
    addTodo: (name) =>
      dispatch(todoActions.addTodo(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosComponent);
