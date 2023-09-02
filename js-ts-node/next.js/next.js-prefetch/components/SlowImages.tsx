import Image from "next/image";

/**
 * 느린 이미지를 불러와서 보여주는 컴포넌트 입니다.
 * Next.js에서 최적화 해주는 Image 컴포넌트와 기본 img의 차이를 비교할 수 있습니다.
 */
export default function SlowImages() {
  const headPadding = 10;
  const cellPadding = 25;
  const slowImgUrl = "/api/slow-image";
  // 실제 이미지 사이즈 보고 px 구함
  const imgWidth = 473 / 3;
  const imgHeight = 966 / 3;
  const imgBorder = "1px solid black";

  return (
    <table border={1}>
      <thead>
        <tr>
          <th style={{ padding: headPadding }}>Next.js Image 컴포넌트 사용</th>
          <th style={{ padding: headPadding }}>기본 img tag 사용</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: cellPadding }}>
            <Image
              alt="Next.js Image 컴포넌트로 표시되는 아주 느리게 서빙된 이미지"
              src={slowImgUrl}
              width={imgWidth}
              height={imgHeight}
              style={{ border: imgBorder }}
            />
          </td>
          <td style={{ padding: cellPadding }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="img tag으로 표시되는 아주 느리게 서빙된 이미지"
              src={slowImgUrl}
              width={imgWidth}
              height={imgHeight}
              style={{ border: imgBorder }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
