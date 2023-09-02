import Link from "next/link";

export default function Nav() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Link href={"/"}>홈 화면</Link>
      <Link href={"/gssp"}>Server Side 호출이 있는 화면</Link>
      <Link href={"/pure"}>아무런 요청이 없는 깨끗한 화면</Link>
    </div>
  );
}
