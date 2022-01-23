import { useState, useEffect } from "react";
import "./App.css";
import Menubar from "./Menubar";
import Folder from "./Folder";
import "./Login.css";
function App() {
  const [loading_done, setloading_done] = useState(false);
  const [check, setcheck] = useState(false);
  const valid = "ravvi";
  function handlesubmit(e) {
    e.preventDefault();
    const pass = e.target.pass.value;
    if (pass === valid) {
      setcheck(!check);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setloading_done(true);
    }, 5000);
  }, [loading_done]);
  return !loading_done ? (
    <div>
      <img src="images/winxp.gif" alt=" " className="loading_screen"></img>
    </div>
  ) : !check ? (
    <div className="login-page">
      <div className="bars"></div>
      <div className="page_center">
        <img src="images/windows-xp-logo.png" alt="" className="logo"></img>
        <div className="account">
          <img src="images/pug.jpg" alt="" className="avatar"></img>
          <div className="account-name">Megamind</div>
          <form onSubmit={handlesubmit} className="login_form">
            <input type="password" name="pass" />
            <button className="login-btn">submit</button>
          </form>
        </div>
      </div>
      <div className="bars"></div>
    </div>
  ) : (
    <div className="full_screen">
      <img src="images/homepage_1.jpg" alt=" " className="homepage"></img>
      <div className="folder_wrapp">
        <Folder folder_name="New Folder 1" />
      </div>
      <Menubar></Menubar>
    </div>
  );
}

export default App;
