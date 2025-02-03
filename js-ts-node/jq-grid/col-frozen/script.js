$(document).ready(function () {
  // 랜덤 데이터 생성 함수
  function generateRandomData(count) {
    const names = [
      "홍길동",
      "김철수",
      "이영희",
      "박민수",
      "정수진",
      "강동원",
      "송혜교",
      "류준열",
      "임수정",
      "한지민",
    ];
    const cities = [
      "서울",
      "부산",
      "인천",
      "대전",
      "광주",
      "대구",
      "울산",
      "세종",
      "제주",
      "수원",
    ];
    const data = [];

    for (let i = 1; i <= count; i++) {
      data.push({
        id: i,
        name: names[Math.floor(Math.random() * names.length)],
        age: Math.floor(Math.random() * (60 - 20 + 1)) + 20, // 20-60세 사이
        city: cities[Math.floor(Math.random() * cities.length)],
      });
    }
    return data;
  }

  // 100개의 샘플 데이터 생성
  const data = generateRandomData(200);

  $("#jqGrid").jqGrid({
    data: data,
    datatype: "local",
    colModel: [
      {
        name: "id",
        label: "ID",
        width: 100,
        key: true,
        frozen: true, // ID 컬럼 고정
      },
      { name: "name", label: "이름", width: 100 },
      { name: "age", label: "나이", width: 100 },
      { name: "city", label: "도시", width: 600 },
    ],
    autowidth: true,
    shrinkToFit: false,
    // width: 780,
    height: 450,
  });

  $("#jqGrid").jqGrid("setFrozenColumns");

  $(window).on("resize", function () {
    // TODO: 여러 jqGrid가 있는 경우 문제가 없는지 확인 필요
    $("#jqGrid").setGridWidth($(".ui-jqgrid").parent().width());
  });
});
