import { TOGGLE_TODO, ADD_TODO } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return [...state].map(item => {
        let todo = { ...item };
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    }
    case ADD_TODO: {
      const { id, content, done } = action.payload;
      return [...state].concat([
        {
          id,
          content,
          done
        }
      ]);
    }
    default:
      return state;
  }
};
