import { Navigate, Route, Routes } from "react-router-dom";
import { Account } from '../Auth/Account.ts';
import Home from "./Home";
import Settings from "./Settings";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";

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
      <Route path="/Settings" element={<Protected><Settings /></Protected>} />
      <Route path="/Auth/Sign-in" element={<Signin />}></Route>
      <Route path="/Auth/Sign-up" element={<Signup />}></Route>
    </Routes>
  )
}

export default App;
