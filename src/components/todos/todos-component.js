import React from 'react';
// import store from '../../store';
// import todoActions from '../../actions/todo-actions';

export default class TodosComponent extends React.Component {
  addTodoClick() {
    this.props.addTodo(this.props.currentTodo);
  }
  componentWillMount() {
    this.props.onLoadClick();
  }
  render(){
    return (
      <div>
        <h1>Todos</h1>
        <p> Now typing: <b>{this.props.currentTodo}</b> </p>
        <input type="text"
          value={this.props.currentTodo}
          onChange={this.props.currentChange}/>
        <button onClick={this.addTodoClick.bind(this)}>Add</button>
        <ul>
          {this.props.todos && this.props.todos.map((todo, i)=>
            <li key={i}>{todo.name}</li>
          )}
        </ul>
        <button onClick={this.props.onLoadClick}>Load</button>
      </div>
    );
  }
}
