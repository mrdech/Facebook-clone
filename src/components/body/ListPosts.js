import React from "react";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ShareIcon from "@mui/icons-material/Share";

import "./ListPosts.css";

function ListPosts(props) {
  return (
    <div className="posts">
      <div className="posts__info">
        <Avatar style={{ cursor: "pointer" }} />
        <div className="post__info__text">
          <h2>{props.userName}</h2>
          <h3>{props.time}</h3>
        </div>
      </div>
      <div className="posts__title">{props.title}</div>
      <div className="posts__media">
        <img src={props.urlImage} alt="" className="posts__picture" />
      </div>
      <div className="posts__interact">
        <div className="posts__interact-left">
          <div className="interact__option">
            <ThumbUpIcon />
            <h3>{props.interact}</h3>
          </div>
        </div>
        <div className="posts__interact-right">
          <div className="interact__option">
            <h3>{props.comment}</h3>
            <ModeCommentIcon />
          </div>
          <div className="interact__option">
            <h3>{props.share}</h3>
            <ShareIcon />
          </div>
        </div>
      </div>
      <div className="posts__actions">
        <div className="action__option">
          <ThumbUpIcon />
          <h3>Thích</h3>
        </div>
        <div className="action__option">
          <ModeCommentIcon />
          <h3>Bình luận</h3>
        </div>
        <div className="action__option">
          <ShareIcon />
          <h3>Chia sẻ</h3>
        </div>
      </div>
    </div>
  );
}

export default ListPosts;
