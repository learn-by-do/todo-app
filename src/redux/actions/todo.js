import { ADD_TODO, TOGGLE_TODO } from './types';

let ID = 0;

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const addTodo = content => ({
  type: ADD_TODO,
  payload: { id: ++ID, content, done: false }
});
