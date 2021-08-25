import ReactDOM from "react-dom";

export default function ModalPortals({ children }) {
  const modalElement = document.querySelector("#modal");
  return ReactDOM.createPortal(children, modalElement);
  // createPortal(ModalPortals안에서 랜더링될 컴포넌트, 랜더링 시킬 상위 DOM Element)
}