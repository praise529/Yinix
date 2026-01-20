import { Router } from "express";
import { Create_Meeting, Delete_Meeting } from "../Controllers/Meeting.controller";

const Meeting_Router = Router();

Meeting_Router.get("/", (req, res) => res.json({ Yinix: true, Chat: "Get all meetings" }));
Meeting_Router.post("/", Create_Meeting);
Meeting_Router.delete("/:ID", Delete_Meeting);

export default Meeting_Router;