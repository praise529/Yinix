import { CaretDown, ChalkboardSimple, ClipboardText, GearSix, HouseSimple, Pencil, XCircle } from 'phosphor-react';
import '../App.css';
import Favicon from '../assets/Favicon.png';
import { Link } from 'react-router-dom';

type SideBarSelected = {
  selected: "Home" | "Tools" | "Work" | "Settings"
};

export default function SideBar({ selected }: SideBarSelected) {
  return (
    <>
      <div className="Side-Bar" id="Side-Bar">
        {/* Close Button */}
        <button className="White-Button" id="Side-Bar-Close-Button"><XCircle weight='bold' size={25}></XCircle></button>

        {/* Side Bar Top */}
        <a href="/" className="Row Side-Bar-Top">
          <img src={Favicon} width="40"></img>
          <h2>Yinix</h2>
        </a>

        {/* Side Bar Options */}
        <Link to="/" className={selected === "Home" ? "Yinix" : ""}><button><HouseSimple weight="bold" className='Icon'></HouseSimple><p>Home</p></button></Link>
        <Link to="/"><button className="Dropdown" id="Classes-Dropdown">
          <ChalkboardSimple className='Icon' weight='bold'></ChalkboardSimple><p>Classes</p>
          <CaretDown weight='bold' className='Dropdown-Arrow'></CaretDown>
        </button></Link>
        <div className="Classes-Dropdown-Items" id="Classes-Dropdown-Items"></div>
        <Link to="/" className={selected === "Tools" ? "Yinix" : ""}><button><Pencil className='Icon' weight="bold" /><p>Tools</p></button></Link>
        <Link to="/" className={selected === "Work" ? "Yinix" : ""}><button><ClipboardText className='Icon' weight='bold'></ClipboardText><p>Your Work</p></button></Link>
        <Link to="/Settings" className={selected === "Settings" ? "Yinix" : ""}><button><GearSix weight='bold' className='Icon'></GearSix><p>Settings</p></button></Link>
      </div>
      <div className="Side-Bar-Backdrop Hidden"></div>
    </>
  );
}
