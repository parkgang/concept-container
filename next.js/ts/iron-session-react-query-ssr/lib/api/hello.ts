import axios from "axios";

export async function getHello1() {
  const { data } = await axios("http://localhost:3000/api/hello1");

  return data;
}

export async function getHello2() {
  const { data } = await axios("http://localhost:3000/api/hello2");

  return data;
}
