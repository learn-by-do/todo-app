import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { toggleTodo } from '../redux/actions/todo';

const Todo = ({ todo, toggle }) => {
  const { content, id, done } = todo;
  return (
    <div
      className={'todo-item'}
      onClick={() => {
        toggle(id);
      }}
    >
      {done ? '✌🏼' : '💪🏼'}
      <span className={cn({ 'item--done': done })}>{content}</span>
    </div>
  );
};

const dispatchMap = dispatch => {
  return {
    toggle: id => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(
  null,
  dispatchMap
)(Todo);
