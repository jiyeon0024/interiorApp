import React from "react";

function Button1(props) {
  return (
    <button
      className="border-2 border-white px-1 rounded hover:border-sky-200  hover:text-sky-200"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button1;
