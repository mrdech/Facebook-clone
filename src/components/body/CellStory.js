import React from "react";

import "./CellStory.css";

function CellStory(props) {
  return (
    <div
      className="cell"
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {props.title && <h3 className="cell__title">{props.title}</h3>}
      {props.userName && <h3 className="cell__username">{props.userName}</h3>}
      {props.id && <props.tag className="add-story" />}
      {!props.id && <props.tag className="cell__avatar">L</props.tag>}
    </div>
  );
}

export default CellStory;
