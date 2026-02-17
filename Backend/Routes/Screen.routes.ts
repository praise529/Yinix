import { Router } from "express";
import { Join_Screen_Share, Start_Screen_Share, Stop_Screen_Share } from "../Controllers/Screen.controller";

const Screen_Router = Router();

Screen_Router.post("/Start", Start_Screen_Share);
Screen_Router.post("/Join/:Code", Join_Screen_Share);
Screen_Router.post("/Stop/:Code", Stop_Screen_Share);

export default Screen_Router;