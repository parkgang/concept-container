import Link from "next/link";

export default function RandomCard() {
  return (
    <>
      <Link href="random">
        <a className="card-small">
          <h1>random 이미지</h1>
        </a>
      </Link>
    </>
  );
}
