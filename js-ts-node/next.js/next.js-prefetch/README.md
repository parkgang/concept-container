## 개요

`Next.js` 에서 `prefetch` 가 어떻게 이뤄지는지 알기 위해서 진행된 프로젝트 입니다.

`prefetch` 시 어떤 데이터를 받아오는지, `SSR` 인 경우는 어떻게 `prefetch` 가 이뤄지는지 등을 확인할 수 있습니다.

## 확인된 것

1. `prefetch` 으로 미리 불러오는 데이터는 `CSS` , `JS` 이다.
   - `image` 의 경우 미리 불러오지 않는다.
   - `CSS` 도 미리 불러오는지까지는 확인하지 못함
1. `prefetch` 되었다고 해서 `SSR` 안되는 것이 아니다.
   - `getServerSideProps` 은 `prefetch` 단계에서 수행되지 않는다.

## 시작

```shell
nvm use
npm i
npm run build # prefetch는 prod 에서만 동작하는 것을 주의하세요.
npm run start
```
