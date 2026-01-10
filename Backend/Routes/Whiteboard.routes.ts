import { Router, type Request, type Response } from "express";
import { Create_Whiteboard } from "../Controllers/Whiteboard.controller";

const Whiteboard_Router = Router();

Whiteboard_Router.post("/", (req: Request, res: Response) => {
    res.json({
        Chat: "Whiteboards"
    });
});

Whiteboard_Router.post("/", Create_Whiteboard)