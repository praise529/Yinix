import { Router, type Request, type Response } from "express";
import { Sign_In, Sign_Out, Sign_Up } from "../Controllers/Auth.controller.ts";

const Auth_Router = Router();

Auth_Router.post("/SignUp", Sign_Up);
Auth_Router.post("/SignIn", Sign_In);
Auth_Router.post("/SignOut", Sign_Out);

export default Auth_Router;