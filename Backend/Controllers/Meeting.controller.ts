import type { Request, Response } from "express";
import Meeting from "../Models/Meeting.model";

export const Create_Meeting = async (req: Request, res: Response) => {
    try {
        const Right_Now = new Date().toJSON();
        var { Name, Date_Time } = req.body;

        if (!Name) {
            res.status(400).json({ Yinix: false, Chat: "Something's missing..." });
            return;
        } else if (!Date_Time) {
            Date_Time = Right_Now;
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

export const Update_Meeting = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        const { Updated_Name, Updated_Participants } = req.body;

        const Meeting_To_Update = await Meeting.findById(ID);

        if (!Meeting_To_Update) {
            res.status(404).json({
                Yinix: false,
                Chat: "404 not in my messy room"
            });
            return;
        }

        Meeting_To_Update.Name = Updated_Name;
        Meeting_To_Update.Participants = Updated_Participants;

        res.status(200).json({
            Yinix: true,
            Chat: "Yay :)",
            Updated_Meeting: Meeting_To_Update
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :("
        });
    }
}

export const Get_ALL_Meetings = async (req: Request, res: Response) => {
    try {
        const All_Meetings = await Meeting.find();

        res.status(200).json({
            Yinix: true,
            Chat: "Here you go :)",
            Meetings: All_Meetings
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :("
        });
    }
}

export const Get_Active_Meetings = async (req: Request, res: Response) => {
    try {
        const All_Meetings = await Meeting.find({ Status: "Active" });

        res.status(200).json({
            Yinix: true,
            Chat: "All the meetings that are going on :)",
            Meetings: All_Meetings
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :("
        });
    }
}

export const Get_Upcoming_Meetings = async (req: Request, res: Response) => {
    try {
        const All_Meetings = await Meeting.find();

        res.status(200).json({
            Yinix: true,
            Chat: "All the meetings you can hac- I meant join...",
            Meetings: All_Meetings
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :("
        });
    }
}