import Image from "next/image";

export default function SsgPage() {
  return (
    <div>
      <h1>SSG Page!</h1>
      <p>ssg 페이지 입니다.</p>
      <Image
        src="/api/slow-image"
        alt="아주 느리게 서빙되는 이미지"
        width={473}
        height={966}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
}
