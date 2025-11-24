import { Router, type Request, type Response } from "express";

const Account_Router = Router();

Account_Router.get("/", (req: Request, res: Response) => res.send("Hi!"));