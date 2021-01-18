import { createReducer } from 'typesafe-actions';

import { TodosState, TodosAction } from './types';
import { addTodo, removeTodo, toggleTodo } from './actions';

const initialState: TodosState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false },
];

const todos = createReducer<TodosState, TodosAction>(initialState)
  .handleAction(addTodo, (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map((todo) => todo.id)) + 1,
      text,
      done: false,
    }),
  )
  .handleAction(toggleTodo, (state, { payload: id }) =>
    state.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  )
  .handleAction(removeTodo, (state, { payload: id }) => state.filter((todo) => todo.id !== id));

export default todos;
