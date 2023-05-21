import Link from "next/link";

export default function Home() {
  return (
    <div style={{ margin: "100px" }} className="App">
      <Link href="/about">
        <a style={{ float: "left" }}>about 페이지로 이동</a>
      </Link>
    </div>
  );
}
