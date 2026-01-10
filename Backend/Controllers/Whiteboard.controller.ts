import type { Request, Response } from "express";
import mongoose from "mongoose";
import Whiteboard from "../Models/Whiteboard.model";

export const Create_Whiteboard = async (req: Request, res: Response) => {
    const Session = await mongoose.startSession();
    Session.startTransaction();

    try {
        const { Name } = req.body;

        const Created_Whiteboard = await Whiteboard.create([{ Name: Name }], { session: Session });

        res.status(201).json({
            Yinix: true,
            Chat: "Created Whiteboard, start drawing",
            Info: Created_Whiteboard
        })
    } catch (Err) {
        console.error(`Sorry... ${Err}`);
        res.status(500).json({
            Yinix: false,
            Chat: "Something went wrong..."
        });
    }
}

export const Find_Whiteboard = async (req: Request, res: Response) => {
    try {
        const { Name } = req.body;

        const Result = await Whiteboard.findOne({ Name: Name });

        res.status(200).json({
            Yinix: true,
            Chat: "Here you go!",
            Info: Result
        });
    } catch (Err) {
        console.error(`Sorry... ${Err}`);
        res.status(500).json({
            Yinix: false,
            Chat: "Something went wrong..."
        });
    }
}