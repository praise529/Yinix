import type { Request, Response } from "express";
import Whiteboard from "../Models/Whiteboard.model";
import Create_Whiteboard_Name from "../Config/Unnamed Generators/Whiteboard";

export const Create_Whiteboard = async (req: Request, res: Response) => {
    try {
        const { Name } = req.body;

        const Created_Whiteboard = await Whiteboard.create({ Name: Name ?? Create_Whiteboard_Name() });

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
        const { ID } = req.params;

        const Result = await Whiteboard.findOne({ _id: ID });

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
export const Find_Whiteboards = async (req: Request, res: Response) => {
    try {
        const Result = await Whiteboard.find();

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
export const Search_Whiteboard = async (req: Request, res: Response) => {
    try {
        const { Query } = req.body;
        if (!Query) return;

        const Result = await Whiteboard.findOne({ Name: Query });

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



export const Update_Whiteboard = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        const { Name, Elements } = req.body;

        const Result = await Whiteboard.findById(ID);
        if (!Result) return;

        Result.Name = Name || Result.Name;
        Result.Elements = Elements || Result.Elements;

        Result.isNew = false;
        Result.save()

        res.status(200).json({
            Yinix: true,
            Chat: "Thank you for riding with us!",
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
export const Delete_Whiteboard = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        if (!ID) return;

        await Whiteboard.findByIdAndDelete(ID);

        res.status(200).json({
            Yinix: true,
            Chat: "Bye bye :(",
        });
    } catch (Err) {
        console.error(`Sorry... ${Err}`);
        res.status(500).json({
            Yinix: false,
            Chat: "Something went wrong..."
        });
    }
}