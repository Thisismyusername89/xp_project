import React, { useState } from "react";
import "./Menubar.css";

export default function Menubar() {
  const [isbelow, setisbelow] = useState(true);
  function handlebelow() {
    setisbelow(!isbelow);
  }
  return (
    <>
      <div className="menu-wrapper">
        <div className={`head ${isbelow ? "below" : ""}`}></div>
        <div className={`menu ${isbelow ? "below" : "notbelow"}`}>
          <div className="menu_1">
            <div className="icons">
              <img src="images/internet_explorer.png" alt="" />
              <span>internet_explorer</span>
            </div>
            <div className="icons">
              <img src="images/paint.png" alt="" />
              <span>piant</span>
            </div>
            <div className="icons">
              <img src="images/media_player.png" alt="" />
              <span>media_player</span>
            </div>
            <div className="icons">
              <img src="images/outlook-express.jpg" alt="" />
              <span>email</span>
            </div>
          </div>
          <div className="menu_2">
            <div className="icons">
              <img src="images/documents.png" alt="" />
              <span>documents</span>
            </div>
            <div className="icons">
              <img src="images/pictures_folder.png" alt="" />
              <span>my pictures</span>
            </div>
            <div className="icons">
              <img src="images/music_folder.png" alt="" />
              <span>music</span>
            </div>
            <div className="icons">
              <img src="images/mycomputer.png" alt="" />
              <span>mycomputer</span>
            </div>
            <div className="icons">
              <img src="images/cont.png" alt="" />
              <span>control panel</span>
            </div>
            <div className="icons">
              <img src="images/info.png" alt="" />
              <span>info</span>
            </div>
            <div className="icons">
              <img src="images/search.png" alt="" />
              <span>search</span>
            </div>
            <div className="icons">
              <img src="images/run.png" alt="" />
              <span>run</span>
            </div>
          </div>
        </div>
      </div>
      <div className="taskbar">
        <div className="nav_bar">
          <img
            className="start_btn"
            src="images/start.png"
            alt=""
            onClick={handlebelow}
          ></img>
        </div>
      </div>
    </>
  );
}
