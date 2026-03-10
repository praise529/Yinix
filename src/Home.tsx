import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import { Spinner, WarningCircle } from "phosphor-react";
import { ServerURL } from "./Scripts/URLs";
import FindSubject from "./Scripts/FindSubject";
import { SetUpTheme } from "./Scripts/Theme";


type ClassroomType = {
    _id: string;
    Name: string;
    Subject: "ALL" | "MATH" | "SCIENCE" | "LITERACY" | "LANGUAGE LEARNING" | "P.E." | "TECHNOLOGY" | "ARTS" | string,
}

function Home() {
    SetUpTheme();
    if (!localStorage.getItem("Yinix-Account")) return;
    const Account = JSON.parse(localStorage.getItem("Yinix-Account") ?? "null");
    const [Classes, SetClasses] = useState<ClassroomType[]>([]);
    const [Error, SetError] = useState(null);
    const [IsLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${ServerURL}/API/Accounts/${Account.Info._id}/Classrooms`)
            .then((Stream) => { return Stream.json() })
            .then((Data) => {
                SetIsLoading(false);
                console.log(Data.Classrooms);

                const CreatedClasses = Data.Classrooms.map((Class: ClassroomType) => ({
                    Name: Class.Name
                }));

                SetClasses(CreatedClasses);
            })
            .catch((Err) => {
                console.error(Err);
                SetError(Err);
            });
    }, []);

    if (IsLoading) {
        return (
            <div>
                <SideBar selected={"Home"} />
                <TopBar></TopBar>

                <div className="Main">
                    {!Error
                        ? <Spinner className="Spinner" weight="bold"></Spinner>
                        : <WarningCircle className="Spinner No-Spin" weight="bold"></WarningCircle>}
                </div>
            </div>
        );
    }

    return (
        <div>
            <SideBar selected={"Home"} />
            <TopBar></TopBar>

            <div className="Main">
                <h1>Classes</h1><br></br><br></br>
                <div className="Classes" id="Classes">
                    {Classes.length > 0
                        ? Classes.map((Class) => (
                            <div className="Class" key={Class._id}>
                                <h3>{Class.Name}</h3>
                                <div className="Subject">
                                    {FindSubject(Class.Subject)}
                                </div>
                            </div>
                        ))
                        : (
                            <div className="Text-Center" title="No Classes">
                                <h2>No classes...</h2><br></br>
                                <p className="Muted">Try joining a class or switching accounts.</p><br></br><br></br>
                                <div className="Row">
                                    <button>Join Class</button>
                                    <button className="White-Button">Switch Accounts</button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Home;
