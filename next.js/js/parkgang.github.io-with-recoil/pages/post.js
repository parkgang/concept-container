import Link from 'next/link';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { pageNameState, getNameSelector } from '../states';

const PostPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);
  const name = useRecoilValueLoadable(getNameSelector);
  switch (name.state) {
    case 'hasValue':
      return (
        <div>
          <div>
            <h1>Post Page!</h1>
          </div>
          <div>
            <span>pageName 상태: {pageName}</span>
          </div>
          <div>
            <button
              onClick={() => {
                setPageName('PostPage');
              }}
            >
              현재 페이지 이름으로 상태 변경
            </button>
          </div>
          <div>
            <h1>{JSON.stringify(name.contents)}</h1>
          </div>
          <Link href="/">
            <button>Index Pages 이동</button>
          </Link>
        </div>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      return <div>{name.contents}</div>;
  }
};

export default PostPage;
