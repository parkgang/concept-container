// 추후 보기 위해 작성한 코드가 아닙니다. 연습장
let main = async () => {
  let task1 = () =>
    new Promise((resolve, reject) => {
      resolve(10);
    })
      .then((value) => {
        console.log(`task1 close: ${value}`);
        throw new Error("에러 만들기");
      })
      .catch((e) => {
        console.error(`task1 오류: ${e}`);
        throw new Error(e);
      });

  try {
    await task1();
  } catch (error) {
    console.error(`main 오류: ${error}`);
  }
};

main();
