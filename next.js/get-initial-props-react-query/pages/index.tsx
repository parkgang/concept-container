import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <Nav />
      <hr />
      <p>
        모든 페이지에서 필요한 Server Side 요청을 위해서 getInitialProps에서
        prefetch 되었습니다.
      </p>
      <p>react-query Dev Tool으로 요청이 prefetch 되었는지 확인해보세요.</p>
      <p>
        이제 props drilling 없이 Server Side에서 조회된 데이터를 어디서든
        useQuery으로 값을 사용할 수 있습니다.
      </p>
      <p>
        이는 page 단위로만 Server 요청이 가능한 Spec 때문에 Server Side에서
        조회된 데이터를 하위 컴포넌트로 전달하기 위해서 props drilling을 피할 수
        있는 패턴입니다.
      </p>
    </>
  );
}
