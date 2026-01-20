import type { Request, Response } from "express";
import Meeting from "../Models/Meeting.model";

export const Create_Meeting = async (req: Request, res: Response) => {
    try {
        const Right_Now = new Date().toLocaleString();
        const { Name, Date_Time } = req.body;

        if (!Name || !Date_Time) {
            res.status(400).json({ Yinix: false, Chat: "Something's missing..." });
            return;
        }

        const New_Meeting = await Meeting.create({ Name: Name, Date_Time: Date_Time });

        res.status(201).json({
            Yinix: true,
            Chat: "NOW you can invite people!",
            Meeting: New_Meeting,
            Date_Time_Now: Right_Now
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :("
        });
    }
};

export const Delete_Meeting = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;

        if (!ID) {
            res.status(400).json({
                Yinix: false,
                Chat: "We need something..."
            });
            return;
        }

        const Meeting_To_Be_Deleted = await Meeting.findById(ID);

        if (!Meeting_To_Be_Deleted) {
            res.status(404).json({
                Yinix: false,
                Chat: "404 we don't have it"
            });
            return;
        }

        await Meeting_To_Be_Deleted.deleteOne();

        res.status(200).json({
            Yinix: true,
            Chat: "Bye bye, meeting :("
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :("
        });
    }   
}