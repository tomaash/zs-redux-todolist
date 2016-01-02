import todoConstants from '../actions/todo-constants';

export default function(state={todos: []}, action) {
  function modifier(props) {
    return Object.assign({}, state, props);
  }
  switch(action.type){
    case todoConstants.RECEIVE_TODOS:
      return modifier({todos: action.data});
    case todoConstants.RECEIVE_NEW_TODO:
      return modifier({todos: [action.data].concat(state.todos)});
    case todoConstants.CURRENT_TODO_CHANGE:
      return modifier({currentTodo: action.data});
    default:
      return state;
  }
}
