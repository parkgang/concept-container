import { RouteComponentProps } from "react-router";

export default function NotFoundPage({ location }: RouteComponentProps) {
  return (
    <>
      <div>
        <h1>{`페이지를 찾을 수 없습니다.(${location.pathname})`}</h1>
      </div>
    </>
  );
}
