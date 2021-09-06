import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>PostPage</h1>
      {id && <span>id: {id}</span>}
      <br />
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  );
}
