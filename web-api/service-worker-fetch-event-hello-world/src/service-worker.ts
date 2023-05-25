/**
 * 해당 타입을 지정하지 않으면 ~ 으로 타입을 참고하면서 문제가 발생합니다.
 * 혹은 `export type {}; declare const self: ServiceWorkerGlobalScope;` 방법으로 지정할 수도 있지만 빈 `export {}` 때문에 콘솔에서 오류로 출력되어 별로입니다. 번들링 작업이 있다면 문제는 없을 것입니다.
 * @see [타입 관련 이슈](https://github.com/microsoft/TypeScript/issues/14877#issuecomment-872329108)
 */
const sw = self as ServiceWorkerGlobalScope & typeof globalThis;

/**
 * 서비스 워커 스코프에 해당하는 fetch 이벤트를 가로채서 로그를 출력합니다.
 */
sw.addEventListener("fetch", (event: FetchEvent) => {
  const { method, headers, url } = event.request;

  console.log("[SW] Fetch Method:", method);
  console.log("[SW] Fetch Headers:", headers);
  console.log("[SW] Fetch URL:", url);
});
