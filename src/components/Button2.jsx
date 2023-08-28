import React from "react";

function Button2(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

export default Button2;
