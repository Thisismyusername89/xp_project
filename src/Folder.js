import React, { useState } from "react";
import "./Folder.css";

export default function Folder({ folder_name }) {
  const [above, setabove] = useState(true);
  function clickhandler() {
    setabove(!above);
  }
  return (
    <div className="Folder">
      <img src="images/folder_icon.png" alt=" " onClick={clickhandler} />
      <span>{folder_name}</span>

      <div className={`"folder_content" ${!above ? "" : "notabove"}`}>
        <div className="bar">
          <span className="spann">
            <img src="images/folder_icon.png"></img>
            <div className="bar_name">{folder_name}</div>
          </span>
          <div className="btns">
            <button>-</button>
            <button>+</button>
            <button onClick={clickhandler}>X</button>
          </div>
        </div>
        <div className="window-body">
          <div className="empty"></div>
          <div className="second-layer">
            <img src="images/arrow-previous.png"></img>
            <span>Back</span>
            <img src="images/arrow-next.png"></img>
            <img src="images/search.png"></img>
            <span>Search</span>
          </div>
          <div className="address">
            <span>Address </span> C\Desktop\New Folder 1
          </div>
          <div className="movie">
            <iframe
              src="https://drive.google.com/file/d/14iEzjzShh4v5gQGzXfq_Gflls4cnF65R/preview"
              width="100"
              height="80"
              allow="autoplay"
            ></iframe>
            <span>
              Megamind_(2011)<br></br>blueray_movie.mkv
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
