import { Link } from "react-router-dom"
import SideBar from "./Components/SideBar"
import TopBar from "./Components/TopBar"

const Tools = () => {
    return (
        <div>
            <SideBar selected="Tools"></SideBar>
            <TopBar></TopBar>

            <div className="Main">
                <h1>Tools</h1><br></br>
                <div className="Grid">
                    <Link to="/Tools/Timer" className="Item-Card">
                        <img src="/src/assets/Tools/Timer Tool Image.png" width="100" className="Item-Card-Thumbnail"></img>
                        <h2><i className="ph-bold ph-timer"></i> Timer</h2>
                    </Link>
                    <Link to={"/Tools"} className="Item-Card">
                        <img src="/src/assets/Tools/Clock Tool Image.png" width="100" className="Item-Card-Thumbnail"></img>
                        <h2><i className="ph-bold ph-clock"></i> Clock</h2>
                    </Link>
                    <Link to={"/Tools"} className="Item-Card">
                        <img src="/src/assets/Tools/Timer Tool Image.png" width="100" className="Item-Card-Thumbnail"></img>
                        <h2><i className="ph-bold ph-map-trifold"></i> Maps</h2>
                    </Link>
                    <Link to={"/Tools"} className="Item-Card">
                        <img src="/src/assets/Tools/Timer Tool Image.png" width="100" className="Item-Card-Thumbnail"></img>
                        <h2><i className="ph-bold ph-shuffle"></i> Randomizer</h2>
                    </Link>
                    <Link to={"/Tools"} className="Item-Card">
                        <img src="/src/assets/Tools/Timer Tool Image.png" width="100" className="Item-Card-Thumbnail"></img>
                        <h2><i className="ph-bold ph-clipboard-text"></i> Attendance</h2>
                    </Link>
                    <a href="./Whiteboard.html" className="Item-Card">
                        <img src="/src/assets/Tools/Timer Tool Image.png" width="100" className="Item-Card-Thumbnail"></img>
                        <h2><i className="ph-bold ph-chalkboard-simple"></i> Whiteboard</h2>
                    </a>
                    <Link to={"/Tools"} className="Item-Card">
                        <img src="/src/assets/Tools/Timer Tool Image.png" width="100" className="Item-Card-Thumbnail"></img>
                        <h2><i className="ph-bold ph-screencast"></i> Screen Share</h2>
                    </Link>
                    <Link to={"/Tools"} className="Item-Card">
                        <img src="/src/assets/Tools/Timer Tool Image.png" width="100" className="Item-Card-Thumbnail"></img>
                        <h2><i className="ph-bold ph-sun"></i> Weather</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Tools
