import "./ModalBoxAge.css";

const ModalBoxAge = props => {

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span onClick={props.closeHandler} className="close">&times;</span>
        <p>INVALID FORMAT: Age must be a number greater than 0.</p>
      </div>
    </div>
  );
};

export default ModalBoxAge;
