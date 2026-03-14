import { CaretLeft, Spinner, WarningCircle } from "phosphor-react"
import SideBar from "./Components/SideBar"
import TopBar from "./Components/TopBar"
import { GoBack, Refresh } from "./Scripts/Navigation"
import { useEffect, useState } from "react"
import { ServerURL } from "./Scripts/URLs"

type StateTypes = "Not Yet" | "Error" | "Done";

const Notification = () => {
    const [Notifications, SetNotifications] = useState<any[]>([]);
    const Account = JSON.parse(localStorage.getItem("Yinix-Account") ?? "null");
    const [State, SetState] = useState<StateTypes>("Not Yet");

    useEffect(() => {
        fetch(`${ServerURL}/API/Accounts/${Account.Info._id}`)
            .then((Stream) => { return Stream.json() })
            .then((Data) => {
                SetState("Done");
                console.log();
                SetNotifications(Data.Account.Notifications);
            })
            .catch((Err) => {
                SetState("Error");
                console.error(Err);
            });
    }, []);

    if (State === "Not Yet") {
        return (
            <div>
                <SideBar selected={"Home"} />
                <TopBar></TopBar>

                <div className="Main">
                    <Spinner className="Spinner" weight="bold"></Spinner>
                </div>
            </div>
        );
    }
    if (State === "Error") {
        return (
            <div>
                <SideBar selected={"Home"} />
                <TopBar></TopBar>

                <div className="Main">
                    <WarningCircle className="Spinner No-Spin" weight="bold"></WarningCircle>
                </div>
            </div>
        );
    }
    return (
        <div>
            <SideBar selected="Home"></SideBar>
            <TopBar></TopBar>

            <div className="Main">
                <button className="White-Button" onClick={() => GoBack()}>
                    <CaretLeft weight='bold' size={17} className='Button-Icon'></CaretLeft>
                    Back
                </button><br></br><br></br><br></br>
                <h1>Notifications</h1>
                <div>
                    {Notifications.length > 0 ? (
                        <div>
                            <h2>Notifications</h2>
                        </div>
                    ) : (
                        <div className="Column Center" style={{ margin: "2rem", gap: "1rem" }}>
                            <h2>No Notifications... YET!</h2>
                            <p className="Muted">Something will pop up SOMETIME...</p>
                            <button onClick={Refresh}>Refresh</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Notification
