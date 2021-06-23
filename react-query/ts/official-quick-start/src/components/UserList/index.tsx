import { useMutation } from "react-query";
import axios from "axios";

function isError(error: any): error is Error {
  return error.Name === "Error";
}

type User = {
  name: string;
  arg: number;
};

async function postUser(body: User) {
  try {
    const endPoint = "http://localhost:8080";
    await axios.post(endPoint, body);
  } catch (error) {
    console.error(error);
  }
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
        "Adding todo..."
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
