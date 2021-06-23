import axios from "axios";

type User = {
  name: string;
  arg: number;
};

async function postUser() {
  try {
    const endPoint = "http://localhost:8080";
    const body: User = {
      name: "react",
      arg: 123,
    };

    await axios.post(endPoint, body);
  } catch (error) {
    console.error(error);
  }
}

function UserList() {
  return (
    <>
      <span>User</span>
      <button onClick={postUser}>버튼 테스트</button>
    </>
  );
}

export default UserList;
