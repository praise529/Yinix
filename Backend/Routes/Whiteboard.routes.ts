import { Router } from "express";
import { Create_Whiteboard, Delete_Whiteboard, Find_Whiteboard, Find_Whiteboards, Update_Whiteboard } from "../Controllers/Whiteboard.controller";

const Whiteboard_Router = Router();

Whiteboard_Router.get("/:ID", Find_Whiteboard);
Whiteboard_Router.put("/:ID", Update_Whiteboard);
Whiteboard_Router.delete("/:ID", Delete_Whiteboard);
Whiteboard_Router.get("/", Find_Whiteboards);
Whiteboard_Router.post("/", Create_Whiteboard);

export default Whiteboard_Router;