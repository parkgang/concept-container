/* .eslintrc.js */
module.exports = {
  parser: '@typescript-eslint/parser', // ESLint 파서를 지정한다.
  extends: [
    'plugin:@typescript-eslint/recommended',
    // @typescript-eslint/ eslint-plugin의 규칙을 사용한다.
    'prettier/@typescript-eslint',
    // eslint-config-prettier를 사용해서 @typescript-eslint/eslint-plugin의 규칙들 중 prettier와 충돌하는 규칙을 비활성화한다.
    'plugin:prettier/recommended',
    // eslint-plugin-prettier와 eslint-config-prettier를 활성화한다. prettier 에러를 eslint 에러로 표시해 줄 것이다. 이 설정은 반드시 extends 배열의 마지막 값이어야 한다.
  ],
  parserOptions: {
    ecmaVersion: 2018, // 모던 ES의 파싱을 허용한다.
    sourceType: 'module', // import의 사용을 허용한다.
  },
};
