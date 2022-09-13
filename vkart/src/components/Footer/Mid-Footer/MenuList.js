import React from "react";

export default function MenuList(props) {
  return (
    <>
      <div className="menulist">
        <h3>{props.title}</h3>
        <ul>
            {props.list}
        </ul>
        <div className="body">
            {props.icon}
            {props.body}
        </div>
      </div>
    </>
  );
}
