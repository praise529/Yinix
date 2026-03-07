import type { Request, Response } from "express";
import Classroom from "../Models/Classroom.model";
import SendConsoleMessage from "../Config/SendConsoleMessage";

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
        SendConsoleMessage("Created New Classroom! ✅");
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
        if (!Class) return;

        res.status(200).json({
            Yinix: true,
            Class: Class
        });
        SendConsoleMessage(`Sent ${Class.Name} classroom! ✅`);
    } catch (Err) {
        console.error(`We couldn't show you a classroom because... ${Err}`);
        res.status(400).json({
            Yinix: false,
            Info: `We couldn't show you a classroom because... ${Err}`
        });
    }
}

export const GetALLClassrooms = async (req: Request, res: Response) => {
    try {
        const Classes = await Classroom.find();

        res.status(200).json({
            Yinix: true,
            Classes: Classes
        });
        SendConsoleMessage("Sent All Classes! ✅");
    } catch (Err) {
        console.error(`We couldn't show you all classrooms because... ${Err}`);
        res.status(400).json({
            Yinix: false,
            Info: `We couldn't show you all classrooms because... ${Err}`
        });
    }
}




export const AddStudentToClassroom = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        const { StudentName, StudentID } = req.body;
        const Class = await Classroom.findById(ID);
        if (!Class) return;

        Class.Students.unshift({ ID: StudentID, Name: StudentName });
        Class.save();

        res.status(201).send({
            Yinix: true,
            Info: "Welcome to your new classroom!",
            Class: Class,
        });
        SendConsoleMessage(`Added ${StudentName} to ${Class.Name} classroom`)
    } catch (Err) {
        console.error(`We couldn't create a classroom because... ${Err}`);
        res.status(400).json({
            Yinix: false,
            Info: `We couldn't create a classroom because... ${Err}`
        });
    }
}





export const SendClassStream = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        const Class = await Classroom.findById(ID);
        if (!Class) return;
        const Stream = Class.Stream;

        res.status(200).send({
            Yinix: true,
            Info: "Thx :)",
            Stream: Stream
        });
        SendConsoleMessage(`Sent all ${Class.Name} classroom stream! ✅`);
    } catch (Err) {
        console.error(`We couldn't give you all chats in this classroom because... ${Err}`);
        res.status(400).json({
            Yinix: false,
            Info: `We couldn't give you all chats in this classroom because... ${Err}`
        });
    }
}
export const CreateClassStream = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        const Class = await Classroom.findById(ID);
        if (!Class) return;
        const Stream = Class.Stream;

        res.status(200).send({
            Yinix: true,
            Info: "Created ✅",
            Stream: Stream
        });
        SendConsoleMessage(`Created a announcement/comment in ${Class.Name} classroom's stream! ✅`);
    } catch (Err) {
        console.error(`We couldn't create a chats in this classroom because... ${Err}`);
        res.status(400).json({
            Yinix: false,
            Info: `We couldn't create a chats in this classroom because... ${Err}`
        });
    }
}