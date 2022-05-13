import "./ModalBox.css";

const ModalBox = props => {

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span onClick={props.closeHandler} className="close">&times;</span>
        <p>ERROR: User or Age field is empty.</p>
      </div>
    </div>
  );
};

export default ModalBox;
