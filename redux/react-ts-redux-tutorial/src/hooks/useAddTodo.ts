import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../modules/todos';

// (text: string) => ReturnType<typeof addTodo>
// (text: string) => PayloadAction<'todos/ADD_TODO', string>

export default function useAddTodo(): (text: string) => ReturnType<typeof addTodo> {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(addTodo(text)), [dispatch]);
}
