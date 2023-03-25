import React from "react";

import "./Row.css";

function Row(props) {
  return (
    <div className="row">
      {props.id === "avatar" && (
        <props.tag className="row__avatar">L</props.tag>
      )}
      {props.id === "more" && <props.tag className="row__more">L</props.tag>}
      {!props.id && <props.tag className="row__tag" />}
      {props.userName && <div className="row__item">{props.userName}</div>}
      {props.title && <div className="row__item">{props.title}</div>}
    </div>
  );
}

export default Row;
