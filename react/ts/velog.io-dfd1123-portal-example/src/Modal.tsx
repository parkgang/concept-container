type Props = {
  show: boolean;
  handleModalShow(arg0: boolean): void;
};

export default function Modal({ show, handleModalShow }: Props) {
  return (
    <div className={"modal-wrap " + (show ? "active" : "")}>
      <div
        className="overlay"
        onClick={() => {
          handleModalShow(false);
        }}
      ></div>
      <div className="modal-con">
        <div className="contents">모달이 열렸다!</div>
        <div className="bottom">
          <button
            type="button"
            onClick={() => {
              handleModalShow(false);
            }}
          >
            모달 닫기
          </button>
        </div>
      </div>
    </div>
  );
}
