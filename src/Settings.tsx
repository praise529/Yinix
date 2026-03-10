import { Bell, Sun, Translate } from "phosphor-react";
import SideBar from "./Components/SideBar";
import Switch from "./Components/Switch";
import TopBar from "./Components/TopBar";
import { SetUpTheme, ToggleTheme } from "./Scripts/Theme";

const Settings = () => {
  SetUpTheme();
  const Account = JSON.parse(localStorage.getItem("Yinix-Account") ?? "null");

  return (
    <div>
      <SideBar selected="Settings" />
      <TopBar></TopBar>

      <div className="Main">
        <h1>Settings</h1><br></br><br></br>

        <div className="Account-Info">
          <h3>{Account.Info.Name}</h3>
          <p className="Muted">{Account.Info.Email}</p>
        </div>
        <div className="Settings-Items">
          <div className="Settings-Item Row">
            <h4 className="Row"><Sun weight="bold" size={24}></Sun> Theme:</h4>
            {/* <select title="Theme Select" ref={ThemeSelectRef}>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select> */}
            <button onClick={() => ToggleTheme()} className="White-Button">Change</button>
          </div>
          <div className="Settings-Item Row">
            <h4 className="Row"><Bell size={24} weight="bold"></Bell> Notifications:</h4>
            <Switch active={false} title="Allow Notifications?"></Switch>
          </div>
          <div className="Settings-Item Row">
            <h4 className="Row"><Translate weight="bold" size={24}></Translate> Language:</h4>
            <select title="Language">
              <option value="English">English</option>
              <option value="Chinese">Chinese</option>
              <option value="Spanish">Spanish</option>
              <option value="Russian">Russian</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="Urdu">Urdu</option>
              <option value="German">German</option>
              <option value="Japanese">Japanese</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
