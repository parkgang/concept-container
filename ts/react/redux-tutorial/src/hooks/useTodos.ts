import { useSelector, shallowEqual } from 'react-redux';

import { RootState } from '../modules';
import { TodosState } from '../modules/todos';

export default function useTodos(): TodosState {
  const todos = useSelector((state: RootState) => state.todos, shallowEqual);
  return todos;
}
