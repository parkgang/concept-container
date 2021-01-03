const myLogger = (store) => (next) => (action) => {
  // 먼저 액션을 출력합니다.
  console.log(action);
  // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달합니다.
  const result = next(action);
  // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined
  return result;
};

export default myLogger;
