import React, { useState } from "react";
import home from "./home.png";
import message from "./message.png";
import settings from "./settings.png";
import profile from "./user.png";
import post from "./more.png";

const BottomNavbar = () => {
  const [activeClass, setActiveClass] = useState("home");
  return (
    <div className="navigation-two">
      <ul>
        <li
          className={`list-two ${activeClass === "home" ? "active-two" : ""} `}
          onClick={() => setActiveClass("home")}
        >
          <a href="#">
            <span>
              <img src={home} alt="" className="icon-two" />
            </span>

            <span className="text-two">home</span>
          </a>
        </li>

        <li
          className={`list-two ${
            activeClass === "message" ? "active-two" : ""
          }`}
          onClick={() => setActiveClass("message")}
        >
          <a href="#">
            <span>
              <img src={message} alt="" className="icon-two" />
            </span>

            <span className="text-two">message</span>
          </a>
        </li>

        <li
          className={`list-two ${activeClass === "post" ? "active-two" : ""} `}
          onClick={() => setActiveClass("post")}
        >
          <a href="#">
            <span>
              <img src={post} alt="" className="icon-two" />
            </span>

            <span className="text-two">post</span>
          </a>
        </li>

        <li
          className={`list-two ${
            activeClass === "settings" ? "active-two" : ""
          } `}
          onClick={() => setActiveClass("settings")}
        >
          <a href="#">
            <span>
              <img src={settings} alt="" className="icon-two" />
            </span>
            <span className="text-two">settings</span>
          </a>
        </li>

        <li
          className={`list-two ${
            activeClass === "profile" ? "active-two" : ""
          } `}
          onClick={() => setActiveClass("profile")}
        >
          <a href="#">
            <span>
              <img src={profile} alt="" className="icon-two" />
            </span>
            <span className="text-two">profile</span>
          </a>
        </li>
        <div className="indicator-two"></div>
      </ul>
    </div>
  );
};

export default BottomNavbar;
