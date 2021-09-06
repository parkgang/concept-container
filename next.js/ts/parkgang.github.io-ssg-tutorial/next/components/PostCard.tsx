import Link from "next/link";

type Props = {
  path: string;
};

export default function PostCard({ path }: Props) {
  const endPoint = `/post/${path}`;
  return (
    <>
      <Link href={endPoint}>
        <a className="card-small">
          <h1>{endPoint}</h1>
        </a>
      </Link>
    </>
  );
}
