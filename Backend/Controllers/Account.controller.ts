import type { Request, Response } from "express";
import Account from "../Models/Account.model";
import Classroom from "../Models/Classroom.model";

export async function SendAllAccounts(req: Request, res: Response) {
    try {
        const Accounts = await Account.find().select("-Password -Code");

        res.status(200).send({
            Yinix: true,
            Accounts: Accounts
        })
    } catch (Err) {
        console.error(Err);
        res.status(500).send({
            Yinix: false,
            Chat: Err
        })
    }
}
export async function SendAnAccount(req: Request, res: Response) {
    try {
        const { ID } = req.params;
        const YinixAccount = await Account.findById(ID).select("-Password -Code");

        res.status(200).send({
            Yinix: true,
            Account: YinixAccount
        })
    } catch (Err) {
        console.error(Err);
        res.status(500).send({
            Yinix: false,
            Chat: Err
        })
    }
}
export async function SendAnAccountByEmail(req: Request, res: Response) {
    try {
        const { Email } = req.body;
        const YinixAccount = await Account.findOne({ Email: Email }).select("-Password -Code");

        res.status(200).send({
            Yinix: true,
            Account: YinixAccount
        })
    } catch (Err) {
        console.error(Err);
        res.status(500).send({
            Yinix: false,
            Chat: Err
        })
    }
}


export async function SendANotificationToAnAccount(req: Request, res: Response) {
    try {
        const { ID } = req.params;
        const { Title, Content, Status, Action } = req.body;
        const YinixAccount = await Account.findById(ID).select("-Password -Code");

        if (!YinixAccount) return;

        YinixAccount.Notifications.unshift({
            Title: Title,
            Status: Status,
            Action: Action,
            Content: Content,
        });
        await YinixAccount.save();

        res.status(201).send({
            Yinix: true,
            Account: YinixAccount.Notifications
        })
    } catch (Err) {
        console.error(Err);
        res.status(500).send({
            Yinix: false,
            Chat: Err
        });
    }
}





export async function SendAccountClassrooms(req: Request, res: Response) {
    try {
        const { ID } = req.params;
        
        const AccountClassrooms = await Classroom.find({ "Students.ID": ID });

        res.status(200).send({
            Yinix: true,
            Classrooms: AccountClassrooms
        })
    } catch (Err) {
        console.error(Err);
        res.status(500).send({
            Yinix: false,
            Chat: Err
        });
    }
}