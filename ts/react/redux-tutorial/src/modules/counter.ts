import { createAction, ActionType, createReducer } from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// () => ({ type: INCREASE })
export const increase = createAction(INCREASE)();
// () => ({ type: DECREASE })
export const decrease = createAction(DECREASE)();
// (payload: number) => ({ type: INCREASE_BY, payload })
export const increaseBy = createAction(INCREASE_BY)<number>();

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
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

export default counter;
