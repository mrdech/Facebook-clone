import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import AppsIcon from "@mui/icons-material/Apps";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt="Facebook"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Tìm kiếm trên facebook" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <PeopleIcon />
        </div>
        <div className="header__option">
          <SmartDisplayIcon />
        </div>
        <div className="header__option">
          <ShoppingBagIcon />
        </div>
        <div className="header__option header__hidden">
          <VideogameAssetIcon />
        </div>
        <div className="header__option header__menu">
          <MenuIcon />
        </div>
      </div>

      <div className="header__right">
        <div className="header__btn-option">
          <AppsIcon />
        </div>
        <div className="header__btn-option">
          <MessageIcon />
        </div>
        <div className="header__btn-option">
          <NotificationsIcon />
        </div>
        <Avatar style={{ cursor: "pointer" }}>L</Avatar>
      </div>
    </div>
  );
}

export default Header;
