import cors from "cors";
import express, { type Request, type Response } from "express";
import Connect_To_Database from "./Database/MongoDB";
import Auth_Router from "./Routes/Auth.routes";
import { PORT } from "./Config/ENV";
import Classroom_Router from "./Routes/Classroom.routes.ts";
import Account_Router from "./Routes/Accounts.routes.ts";
import Meeting_Router from "./Routes/Meetings.routes.ts";
import Attendance_Router from "./Routes/Attendance.routes.ts";

const App = express();
const Port = PORT || 5000;

App.use(cors());
App.use(express.json());
App.use("/API/Auth", Auth_Router);
App.use("/API/Meetings", Meeting_Router);
App.use("/API/Accounts", Account_Router);
App.use("/API/Classrooms", Classroom_Router);
App.use("/API/Attendance", Attendance_Router);

App.get("/", (req: Request, res: Response) => {
  res.json({ Yinix: true });
});

App.listen(Port, async () => {
  await Connect_To_Database();
  console.log(`Yinix! - http://localhost:${PORT}`);
});
