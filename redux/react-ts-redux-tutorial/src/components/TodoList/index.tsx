import React from 'react';
import { TodoItem } from '..';
import useTodos from '../../hooks/useTodos';

function TodoList(): JSX.Element {
  const todos = useTodos();

  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
