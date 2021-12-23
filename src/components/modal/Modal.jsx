// NPM Package
import ReactDOM from "react-dom";

// Project File
import "./modal.scss";

export default function Modal({ children, handleClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button className="btn btn-close" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}
