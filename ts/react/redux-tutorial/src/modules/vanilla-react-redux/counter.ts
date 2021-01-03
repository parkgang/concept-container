const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

interface ActionCreateFun<T> {
  type: string;
  payload?: T;
}

export const increase = (): ActionCreateFun<null> => ({ type: INCREASE });
export const decrease = (): ActionCreateFun<null> => ({ type: DECREASE });
export const increaseBy = (diff: number): ActionCreateFun<number> => ({
  type: INCREASE_BY,
  payload: diff,
});

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

function counter(state: CounterState = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + (action.payload as number) };
    default:
      return state;
  }
}

export default counter;
