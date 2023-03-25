import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import HistoryIcon from "@mui/icons-material/History";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

import Row from "./Row";
import "./BodyLeft.css";

function BodyLeft() {
  return (
    <div className="body__left">
      <div className="left-top">
        <Row id="avatar" userName="User Name" tag={Avatar} />
        <Row title="Bạn bè" tag={PeopleIcon} />
        <Row title="Nhóm" tag={GroupsIcon} />
        <Row title="Watch" tag={SmartDisplayIcon} />
        <Row title="Gần đây nhất" tag={HistoryIcon} />
        <Row title="Marketplace" tag={ShoppingBagIcon} />
        <Row title="Kỹ niệm" tag={HistoryIcon} />
        <Row title="Đã lưu" tag={BookmarkIcon} />
        <Row title="Trang" tag={AssistantPhotoIcon} />
        <Row id="more" title="Xem thêm" tag={ExpandMoreIcon} />
      </div>
    </div>
  );
}

export default BodyLeft;
