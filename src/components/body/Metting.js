import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";

import "./Metting.css";

function Metting() {
  return (
    <div className="metting">
      <div className="metting__items">
        <VideoCallIcon />
        <h3>Tạo phòng gặp mặt</h3>
      </div>
    </div>
  );
}

export default Metting;
