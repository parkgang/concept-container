
import { TodoItem } from '..';
import { useTodosState } from '../../contexts/TodosContext';

function TodoList(): JSX.Element {
  const todos = useTodosState();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
