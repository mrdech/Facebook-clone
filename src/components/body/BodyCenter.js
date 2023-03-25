import React from "react";

import "./BodyCenter.css";
import Story from "./Story";
import Post from "./Post";
import Metting from "./Metting";
import ListPosts from "./ListPosts";

function BodyCenter() {
  const dataListPosts = [
    {
      userName: "Nghiện mèo",
      time: "23 giờ",
      title: "Hôm nay là một ngày tuyệt vời",
      urlImage: "./images/cat-posts.jpg",
      interact: "53k",
      comment: "999",
      share: "223",
    },
    {
      userName: "Nghiện mèo",
      time: "23 giờ",
      title: "Hôm nay là một ngày tuyệt vời",
      urlImage: "./images/cat-posts.jpg",
      interact: "53k",
      comment: "999",
      share: "223",
    },
    {
      userName: "Nghiện mèo",
      time: "23 giờ",
      title: "Hôm nay là một ngày tuyệt vời",
      urlImage: "./images/cat-posts.jpg",
      interact: "53k",
      comment: "999",
      share: "223",
    },
    {
      userName: "Nghiện mèo",
      time: "23 giờ",
      title: "Hôm nay là một ngày tuyệt vời",
      urlImage: "./images/cat-posts.jpg",
      interact: "53k",
      comment: "999",
      share: "223",
    },
    {
      userName: "Nghiện mèo",
      time: "23 giờ",
      title: "Hôm nay là một ngày tuyệt vời",
      urlImage: "./images/cat-posts.jpg",
      interact: "53k",
      comment: "999",
      share: "223",
    },
    {
      userName: "Nghiện mèo",
      time: "23 giờ",
      title: "Hôm nay là một ngày tuyệt vời",
      urlImage: "./images/cat-posts.jpg",
      interact: "53k",
      comment: "999",
      share: "223",
    },
    {
      userName: "Nghiện mèo",
      time: "23 giờ",
      title: "Hôm nay là một ngày tuyệt vời",
      urlImage: "./images/cat-posts.jpg",
      interact: "53k",
      comment: "999",
      share: "223",
    },
    {
      userName: "Nghiện mèo",
      time: "23 giờ",
      title: "Hôm nay là một ngày tuyệt vời",
      urlImage: "./images/cat-posts.jpg",
      interact: "53k",
      comment: "999",
      share: "223",
    },
    {
      userName: "Nghiện mèo",
      time: "23 giờ",
      title: "Hôm nay là một ngày tuyệt vời",
      urlImage: "./images/cat-posts.jpg",
      interact: "53k",
      comment: "999",
      share: "223",
    },
  ];

  return (
    <div className="body__center">
      <Story />
      <Post />
      <Metting />
      {dataListPosts.map((data) => (
        <ListPosts
          title={data.title}
          time={data.time}
          userName={data.userName}
          urlImage={data.urlImage}
          interact={data.interact}
          comment={data.comment}
          share={data.share}
        />
      ))}
    </div>
  );
}

export default BodyCenter;
