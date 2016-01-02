import axios from 'axios';
import todoConstants from './todo-constants';
const API_URL = 'https://zs-todo-api.herokuapp.com/';
const TODOS_URL = API_URL + 'todos';


const actions = {
  receiveTodos: function loadTodosAction(data) {
    return {
      type: todoConstants.RECEIVE_TODOS,
      data: data
    }
  },

  receiveNewTodo: function addTodoAction(data) {
    return {
      type: todoConstants.RECEIVE_NEW_TODO,
      data: data
    }
  },

  currentTodoChange: function(data) {
    return {
      type: todoConstants.CURRENT_TODO_CHANGE,
      data: data
    }
  },

  fetchTodos: function() {
    return async (dispatch) => {
      var response = await axios.get(TODOS_URL);
      var data = response.data;
      dispatch(actions.receiveTodos(data));
    }
  },

  addTodo: function(name) {
    return async (dispatch) => {
      var payload = {name};
      var response = await axios.post(TODOS_URL, payload);
      var data = response.data;
      dispatch(actions.receiveNewTodo(data));
    }
  }
}

export default actions;