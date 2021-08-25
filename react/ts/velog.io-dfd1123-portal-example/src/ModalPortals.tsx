import { ReactNode } from "react";
import ReactDOM from "react-dom";

type Props = {
  children: ReactNode;
};

export default function ModalPortals({ children }: Props) {
  const modalElement = document.querySelector("#modal");
  return ReactDOM.createPortal(children, modalElement as Element);
  // createPortal(ModalPortals안에서 랜더링될 컴포넌트, 랜더링 시킬 상위 DOM Element)
}
