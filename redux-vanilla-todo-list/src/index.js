import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// reducer 위에 주로 작성되며 오로지 object를 return 형식만 가지고 있음
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      /* Spread으로 배열 input 순서에 따라서 TODO List 생성 순서 변경 가능 */
      // 방법1
      // return [{ text: action.text, id: Date.now() }, ...state];
      // 방법2
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      /* array에서 object를 삭제하지 않습니다. 삭제할 object를 제외시킨 새로운 array를 만들어 반환합니다. */
      // 방법!
      // return state.filter((toDo) => toDo.id !== action.id);
      // 방법2
      const cleaned = state.filter((toDo) => toDo.id !== action.id);
      return cleaned;
    default:
      return [];
  }
};

const store = createStore(reducer);

// 오로지 action을 dispatch를 하기 위한 함수
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

// Debug
store.subscribe(() => {
  console.log(store.getState());
});

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
