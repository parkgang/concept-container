// for (var i = 0; i < 10; i++) {
//   document.write(`test: ${i}`);
//   document.write("<br>");
// }

// CSS 셀렉터를 이용해 요소를 선택한다
const elem = document.querySelector("li.red");
// 클래스 어트리뷰트의 값을 변경한다.
elem.className = "blue";
