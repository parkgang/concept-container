import { useMutation } from "react-query";
import axios from "axios";

function isError(error: any): error is Error {
  return error.name === "Error";
}

type User = {
  name: string;
  arg: number;
};

async function postUser(body: User) {
  const endPoint = "http://localhost:8080";
  await axios.post(endPoint, body);
}

function UserList() {
  const user: User = {
    name: "react",
    arg: 123,
  };

  const mutation = useMutation((newUser: User) => postUser(newUser));

  return (
    <div>
      {mutation.isLoading ? (
        "Adding user..."
      ) : (
        <>
          {mutation.isError ? <div>An error occurred: {isError(mutation.error) ? mutation.error.message : ""}</div> : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate(user);
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  );
}

export default UserList;
