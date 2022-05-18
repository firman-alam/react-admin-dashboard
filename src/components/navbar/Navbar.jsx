import React, { useContext } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";
import { DarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="navbar__items">
          <div className="navbar__item">
            <LanguageIcon className="navbar__icon" />
            English
          </div>
          <div className="navbar__item">
            <DarkModeIcon
              className="navbar__icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="navbar__item">
            <FullscreenExitIcon className="navbar__icon" />
          </div>
          <div className="navbar__item">
            <NotificationsNoneIcon className="navbar__icon" />
            <div className="notification__counter">1</div>
          </div>
          <div className="navbar__item">
            <ChatBubbleOutlineIcon className="navbar__icon" />
            <div className="notification__counter">1</div>
          </div>
          <div className="navbar__item">
            <ListIcon className="navbar__icon" />
          </div>
          <div className="navbar__item">
            <img
              src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="navbar__avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
