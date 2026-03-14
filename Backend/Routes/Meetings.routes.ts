import { Router } from "express";
import { Create_Meeting, Delete_Meeting, Get_Active_Meetings, Get_ALL_Meetings, Get_Upcoming_Meetings, Update_Meeting } from "../Controllers/Meeting.controller";

const Meeting_Router = Router();

Meeting_Router.get("/", Get_ALL_Meetings);
Meeting_Router.get("/Active", Get_Active_Meetings);
Meeting_Router.get("/Upcoming", Get_Upcoming_Meetings);
Meeting_Router.post("/", Create_Meeting);
Meeting_Router.delete("/:ID", Delete_Meeting);
Meeting_Router.put("/:ID", Update_Meeting);

export default Meeting_Router;