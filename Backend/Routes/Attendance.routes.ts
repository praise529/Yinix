import { Router, type Request, type Response } from "express";
import Create_Attendance_Session_Code from "../Config/Attendance_Code";
import { Clear_Sessions, Create_Attendance, Create_Attendance_Session, Delete_Attendance, Get_ALL_Attendances, Get_Attendance, Get_Attendance_Sessions, Update_Attendance } from "../Controllers/Attendance.controller";

const Attendance_Router = Router();

Attendance_Router.get("/", Get_ALL_Attendances);

Attendance_Router.get("/:ID", Get_Attendance);
Attendance_Router.put("/:ID", Update_Attendance);
Attendance_Router.delete("/:ID", Delete_Attendance);
Attendance_Router.delete("/:ID/Sessions", Clear_Sessions);
Attendance_Router.get("/:ID/Sessions", Get_Attendance_Sessions);
Attendance_Router.post("/:ID/Sessions", Create_Attendance_Session);

Attendance_Router.post("/", Create_Attendance);

export default Attendance_Router;