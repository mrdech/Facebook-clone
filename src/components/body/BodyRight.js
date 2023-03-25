import React from "react";
import { Avatar } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";

import Row from "./Row";
import "./BodyRight.css";

function BodyRight() {
  return (
    <div className="body__right">
      <div className="right-top">
        <div className="right-top__nav">
          <h3>Người liên hệ</h3>
          <div className="right-top__options">
            <VideoCallIcon />
            <SearchIcon />
            <MoreHorizIcon />
          </div>
        </div>
        <div className="right-top__user">
          <Row id="avatar" userName="User Name" tag={Avatar} />
          <Row id="avatar" userName="User Name" tag={Avatar} />
          <Row id="avatar" userName="User Name" tag={Avatar} />
          <Row id="avatar" userName="User Name" tag={Avatar} />
          <Row id="avatar" userName="User Name" tag={Avatar} />
          <Row id="avatar" userName="User Name" tag={Avatar} />
        </div>
      </div>
      <div className="right__bottom">
        <h3>Cuộc trò chuyện nhóm</h3>
        <div className="right-bottom__group-message">
          <Row id="more" title="Tạo nhóm mới" tag={AddIcon} />
        </div>
      </div>
    </div>
  );
}

export default BodyRight;
