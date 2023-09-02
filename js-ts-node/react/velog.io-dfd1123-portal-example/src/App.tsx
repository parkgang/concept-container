import { useState } from "react";

import ModalPortals from "./ModalPortals";
import Modal from "./Modal";

import "./styles.css";

export default function App() {
  const [modal, setModal] = useState(false);

  function handleModalShow(status: boolean) {
    setModal(status);
  }
  function handleOnClick() {
    handleModalShow(true);
  }

  return (
    <div className="App">
      <h1>쫑's의 Portals 모달 만들기</h1>
      <h2>밑에 모달 버튼을 눌러보세요!</h2>

      <div>
        <button type="button" onClick={handleOnClick}>
          모달 버튼
        </button>
      </div>

      <ModalPortals>
        <Modal show={modal} handleModalShow={handleModalShow} />
      </ModalPortals>
    </div>
  );
}
