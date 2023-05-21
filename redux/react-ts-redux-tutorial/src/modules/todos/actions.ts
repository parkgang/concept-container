import { createAction } from 'typesafe-actions';

export const addTodo = createAction('todos/ADD_TODO')<string>();
export const toggleTodo = createAction('todos/TOGGLE_TODO')<number>();
export const removeTodo = createAction('todos/REMOVE_TODO')<number>();
