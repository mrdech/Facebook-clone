import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./Story.css";
import CellStory from "./CellStory";
import { Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Story() {
  return (
    <div className="story">
      <div className="story__item">
        <CellStory title="Tạo tin" tag={AddIcon} id={Math.random} />
        <CellStory userName="User Name" tag={Avatar} />
        <CellStory userName="User Name" tag={Avatar} />
        <CellStory userName="User Name" tag={Avatar} />
        <CellStory userName="User Name" tag={Avatar} />
      </div>
      <ArrowForwardIcon />
    </div>
  );
}

export default Story;
