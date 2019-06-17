import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { FILTER } from '../constants';

class TodoList extends Component {
  render() {
    const list = this.props.todoList.map(item => {
      return <Todo todo={item} key={item.id} />;
    });
    return (
      <div className="todo-list">
        {list.length ? list : <span className="empty-hint">nothing to show</span>}
      </div>
    );
  }
}
const stateMap = state => {
  const { todo, filter } = state;

  return {
    todoList: todo.filter(item => {
      if (filter === FILTER.ALL) return true;
      else if (filter === FILTER.DONE) return item.done;
      else return item.done === false;
    })
  };
};
export default connect(stateMap)(TodoList);
