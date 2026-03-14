import { Bell, List } from "phosphor-react";
import "../App.css";
import AccountPicture from '../assets/Favicon BG.png'
import { OpenSideBar } from "../Scripts/SideBar";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <nav id="Top-Bar" className="Top-Bar">
      <button className="White-Button" style={{
        border: "none",
        fontSize: "1.5rem",
        background: "var(--Main-White-1)",
      }} onClick={OpenSideBar}>
        <List weight="bold" size={20}></List>
      </button>
      <img id="Account-Picture" className="Account-Picture" src={AccountPicture} title="Account"></img>
      <Link to={"/Notifications"}>
        <button className="Notification-Button White-Button">
          <Bell size={20} weight="bold"></Bell>
        </button>
      </Link>
    </nav>
  );
}
