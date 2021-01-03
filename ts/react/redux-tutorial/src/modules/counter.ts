import { createAction, ActionType, createReducer } from 'typesafe-actions';

// () => ({ type: INCREASE })
export const increase = createAction('counter/INCREASE')();
// () => ({ type: DECREASE })
export const decrease = createAction('counter/DECREASE')();
// (payload: number) => ({ type: INCREASE_BY, payload })
export const increaseBy = createAction('counter/INCREASE_BY')<number>();

// 유니온 작업이 필요한 action 생성 함수 타입을 한번에 생성해줌
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

// 리듀서
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));

export default counter;
