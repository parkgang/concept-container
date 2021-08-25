type Props = {
  show: boolean;
  handleModalShow(arg0: boolean): void;
};

export default function Modal({ show, handleModalShow }: Props) {
  function handleOnClick() {
    handleModalShow(false);
  }

  return (
    <div className={"modal-wrap " + (show ? "active" : "")}>
      <div className="overlay" onClick={handleOnClick}></div>
      <div className="modal-con">
        <div className="contents">모달이 열렸다!</div>
        <div className="bottom">
          <button type="button" onClick={handleOnClick}>
            모달 닫기
          </button>
        </div>
      </div>
    </div>
  );
}
