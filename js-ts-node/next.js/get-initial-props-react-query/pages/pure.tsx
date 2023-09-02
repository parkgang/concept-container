import Nav from "../components/Nav";

export default function Pure() {
  return (
    <>
      <h2>Pure Page</h2>
      <Nav />
      <hr />
      <p>아무런 요청이 없는 페이지 입니다.</p>
      <p>
        하지만 모든 페이지에서 필요한 Server Side 요청을 위해서
        getInitialProps에서 prefetch 된 값도 확인할 수 있습니다.
      </p>
      <p>
        이제 네트워크를 지연시키거나 console.log를 찍어보면서 어떤
        life-cycle으로 수행되는지 살펴보세요.
      </p>
    </>
  );
}
