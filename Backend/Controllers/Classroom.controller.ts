import type { Request, Response } from "express";
import Classroom from "../Models/Classroom.model";

export const Add_Classroom = async (req: Request, res: Response) => {
    try {
        const { Name, Room } = req.body;

        const New_Classroom = await Classroom.create({
            Name: Name,
            Room: Room
        });

        res.status(201).json({
            Yinix: true,
            Info: "Welcome!",
            Class: New_Classroom
        });
    } catch (Err) {
        console.error(`We couldn't create a classroom because... ${Err}`);
        res.status(400).json({
            Yinix: false,
            Info: `We couldn't create a classroom because... ${Err}`
        });
    }
}

export const Get_Classroom = async (req: Request, res: Response) => {
    try {
        const ID = req.params.ID;
        const Class = await Classroom.findById(ID);

        res.status(200).json({
            Yinix: true,
            Class: Class
        });
    } catch (Err) {
        console.error(`We couldn't show you a classroom because... ${Err}`);
        res.status(400).json({
            Yinix: false,
            Info: `We couldn't show you a classroom because... ${Err}`
        });
    }
}

export const Get_ALL_Classrooms = async (req: Request, res: Response) => {
    try {
        const Classes = await Classroom.find();

        res.status(200).json({
            Yinix: true,
            Classes: Classes
        });
    } catch (Err) {
        console.error(`We couldn't show you all classrooms because... ${Err}`);
        res.status(400).json({
            Yinix: false,
            Info: `We couldn't show you all classrooms because... ${Err}`
        });
    }
}