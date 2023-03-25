import React from "react";
import { Avatar } from "@mui/material";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post__content">
        <Avatar style={{ cursor: "pointer" }}>L</Avatar>
        <form>
          <input type="text" placeholder="Bạn đang nghĩ gì thế?" />
        </form>
      </div>
      <div className="post__vehicle">
        <div className="post__option post__option-live">
          <VideoCameraFrontIcon />
          <h3>Video trực tiếp</h3>
        </div>
        <div className="post__option post__option-media">
          <AddPhotoAlternateIcon />
          <h3>Ảnh/video</h3>
        </div>
        <div className="post__option post__option-feel">
          <EmojiEmotionsIcon />
          <h3>Cảm xúc/hoạt động</h3>
        </div>
      </div>
    </div>
  );
}

export default Post;
