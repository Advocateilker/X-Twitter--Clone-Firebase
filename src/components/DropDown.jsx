import { useRef } from "react";

const DropDown = ({ handleDelete, handleEdit }) => {
  const inputRef = useRef();
  return (
    <>
      <label className="popup">
        <input ref={inputRef} type="checkbox" />
        <div className="burger" tabIndex="0">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="popup-window">
          <legend>Edit</legend>
          <ul>
            <li>
              <button
                onClick={() => {
                  handleEdit();
                  inputRef.current.checked = false;
                }}
              >
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                </svg>
                <span>Edit</span>
              </button>
            </li>
            <li>
              <button onClick={handleDelete}>
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y2="18" x2="6" y1="6" x1="18"></line>
                  <line y2="18" x2="18" y1="6" x1="6"></line>
                </svg>
                <span>Delete</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>
    </>
  );
};

export default DropDown;