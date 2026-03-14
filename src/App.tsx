import { Navigate, Route, Routes } from "react-router-dom";
import { Account } from '../Auth/Account.ts';
import Home from "./Home";
import Settings from "./Settings";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Tools from "./Tools.tsx";
import TimerTool from "./Tools/Timer.tsx";
import Class from "./Class.tsx";
import Notification from "./Notification.tsx";

function Protected({ children }: any) {
  if (!Account) {
    return <Navigate to="/Auth/Sign-in" replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Protected><Home /></Protected>} />
      <Route path="/Notifications" element={<Protected><Notification /></Protected>} />
      <Route path="/Class" element={<Protected><Class /></Protected>} />
      <Route path="/Settings" element={<Protected><Settings /></Protected>} />
      <Route path="/Tools" element={<Protected><Tools /></Protected>} />
      <Route path="/Tools/Timer" element={<Protected><TimerTool /></Protected>} />
      <Route path="/Auth/Sign-in" element={<Signin />}></Route>
      <Route path="/Auth/Sign-up" element={<Signup />}></Route>
    </Routes>
  )
}

export default App;
