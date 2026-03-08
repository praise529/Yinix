import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";

const Settings = () => {
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
        <div className="SettingsItems"></div>
      </div>
    </div>
  );
};

export default Settings;
