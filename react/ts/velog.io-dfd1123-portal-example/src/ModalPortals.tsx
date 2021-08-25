import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
};

export default function ModalPortals({ children }: Props) {
  const modalElement = document.getElementById("modal");

  // createPortal(ModalPortals안에서 랜더링될 컴포넌트, 랜더링 시킬 상위 DOM Element)
  return createPortal(children, modalElement as Element);
}
