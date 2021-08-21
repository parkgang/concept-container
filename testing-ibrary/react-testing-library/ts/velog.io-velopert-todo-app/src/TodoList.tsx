import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onRemove }: any) => {
  return (
    <ul data-testid="TodoList">
      {todos.map((todo: any) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
