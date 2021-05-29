# Hi

nest.js의 middleware 동작을 확인하기 위한 프로젝트 입니다.  
[공식 문서](https://docs.nestjs.com/middleware)를 참조하였습니다.

`/api-spec.http` 으로 쉽게 확인할 수 있도록 되어있습니다.

# 이슈

## ESLint에서 `tsconfig.json` 읽지 못함

하위 디렉터리 내부로 들어가 있어 ESLint에서 `Parsing error: Cannot read file '/users/kyungeun/sources/repos/parkgang/js-ts-container/tsconfig.json'.eslint` 에러가 발생하여 [해당 문서](https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint)를 참고하여 `.eslintrc.js` 에 `tsconfigRootDir: __dirname` 를 추가하여 fix 했습니다.
