import Account from "../Models/Account.model.ts";
import Screen_Model from "../Models/Screen.model.ts";
import { type Request, type Response } from "express";

export const Start_Screen_Share = async (req: Request, res: Response) => {
    try {
        const { Account_ID, Peer_ID } = req.body;
        const Account_Check = await Account.findById(Account_ID);

        if (!Account_Check || Account_Check.Role !== "Teacher") {
            res.status(403).json({
                Yinix: false,
                Chat: "Grow up."
            })
            return;
        }

        const Screen = await Screen_Model.findOneAndUpdate(
            { Account: Account_ID },
            { 
                Peer_ID: Peer_ID, 
                Active: true 
            },
            { new: true, upsert: true }
        );

        res.status(200).json({
            Yinix: true,
            Chat: "Mirroring started",
            Screen: Screen
        });
    } catch (Err) {
        res.status(500).json({
            Yinix: false,
            Chat: `Couldn't share screen because ${Err}`
        });
    }
};

export const Join_Screen_Share = async (req: Request, res: Response) => {
    try {
        const { Code } = req.params;

        const Screen = await Screen_Model.findOne({ Code: Code, Active: true });

        if (!Screen) {
            res.status(404).json({
                Yinix: false,
                Err: "404 im too lazy"
            });
            return;
        }

        res.status(200).json({
            Yinix: true,
            Peer_ID: Screen.Peer_ID
        });
    } catch (Err) {
        res.status(500).json({
            Yinix: false,
            Err: `Err joining mirror because ${Err}`
        });
    }
};

export const Stop_Screen_Share = async (req: Request, res: Response) => {
    try {
        const { Account_ID } = req.body;

        await Screen_Model.findOneAndUpdate({ Account: Account_ID }, { Active: false, Peer_ID: null });
        
        res.status(200).json({
            Yinix: true,
            Chat: "Screen Share stopped :("
        });
    } catch (Err) {
        res.status(500).json({
            Yinix: false,
            Chat: "Err stopping mirror"
        });
    }
};
