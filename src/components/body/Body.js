import React from "react";

import "./Body.css";
import BodyLeft from "./BodyLeft";
import BodyCenter from "./BodyCenter";
import BodyRight from "./BodyRight";

function Body() {
  return (
    <div className="body-container">
      <BodyLeft />
      <BodyCenter />
      <BodyRight />
    </div>
  );
}

export default Body;
