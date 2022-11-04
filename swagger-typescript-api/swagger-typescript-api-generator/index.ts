import * as jsonplaceholderAxios from "./generated/axios-jsonplaceholder-api";

async function main() {
  const jsonplaceholderAxiosApi = new jsonplaceholderAxios.Api();

  // https://jsonplaceholder.typicode.com/todos/1 으로 호출하는 코드
  const axiosTodos = await jsonplaceholderAxiosApi.todos.getTodo(1);

  console.log("axios", axiosTodos.data); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
}

main();
