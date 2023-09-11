import React from "react";

export default function Container(props) {
  return (
    <div
      className={`container p-8 mx-auto mb-12 xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}
