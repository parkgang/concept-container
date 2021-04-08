import { useRecoilValue } from "recoil";

import TodoListStats from "./components/TodoListStats";
import TodoListFilters from "./components/TodoListFilters";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoItem from "./components/TodoItem";
import { filteredTodoListState } from "./state";

function App() {
  // todoListState에서 filteredTodoListState로 변경됨
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}

export default App;
