import { Router } from "express";

const Meeting_Router = Router();

Meeting_Router.get("/", (req, res) => res.json({ Yinix: true, Chat: "Get all meetings" }));

export default Meeting_Router;