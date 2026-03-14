import { List } from "phosphor-react";
import "../App.css";
import AccountPicture from '../assets/Favicon BG.png'
import { OpenSideBar } from "../Scripts/SideBar";

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
    </nav>
  );
}
