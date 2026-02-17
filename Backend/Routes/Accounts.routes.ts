import { Router } from "express";
import { SendAccountClassrooms, SendAllAccounts, SendAnAccount, SendAnAccountByEmail, SendANotificationToAnAccount } from "../Controllers/Account.controller";

const Account_Router = Router();

Account_Router.get("/", SendAllAccounts);
Account_Router.get("/:ID", SendAnAccount);
Account_Router.post("/", SendAnAccountByEmail);
Account_Router.get("/:ID/Classrooms", SendAccountClassrooms);
Account_Router.post("/:ID/Notification", SendANotificationToAnAccount);

export default Account_Router;