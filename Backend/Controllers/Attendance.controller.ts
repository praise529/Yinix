import type { Request, Response } from "express";
import { Attendance_Model, Attendance_Session_Model } from "../Models/Attendance.model";
import Create_Attendance_Session_Code from "../Config/Attendance_Code";

export const Create_Attendance = async (req: Request, res: Response) => {
    try {
        const { Name, Students } = req.body;

        if (!Name || !Students || !req.body) {
            res.status(400).json({
                Yinix: false,
                Chat: "Something's missing"
            });
        }
        
        const Same_Attendance = await Attendance_Model.findOne({ Name: Name });
        if (Same_Attendance) {
            return;
        }
        
        const Attendance = await Attendance_Model.create({
            Name: Name,
            Students: Students,
        });
        
        res.status(201).json({
            Yinix: true,
            Chat: "Let's figure out who skipped school :)",
            Attendance: Attendance
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :("
        });
    }
}


export const Get_Attendance = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        
        const Attendance = await Attendance_Model.findById(ID);
        
        res.status(200).json({
            Yinix: true,
            Chat: "Here you go :)",
            Attendance: Attendance
            
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :(",
            Error: Err
        });
    }
}
export const Update_Attendance = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        const { Name, Students } = req.body;
        
        const Attendance = await Attendance_Model.findByIdAndUpdate(ID, { Name: Name, Students: Students });
        
        res.status(200).json({
            Yinix: true,
            Chat: "Here you go :)",
            Attendance: Attendance

        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :(",
            Error: Err
        });
    }
}

export const Get_ALL_Attendances = async (req: Request, res: Response) => {
    try {
        const Attendances = await Attendance_Model.find();

        res.status(200).json({
            Yinix: true,
            Chat: "Here you go :)",
            Attendances: Attendances
            
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :(",
            Error: Err
        });
    }
}
export const Delete_Attendance = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        
        await Attendance_Model.findByIdAndDelete(ID);
        
        res.status(200).json({
            Yinix: true,
            Chat: "Bye :(",
            
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :((",
            Error: Err
        });
    }
}



export const Get_Attendance_Sessions = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;

        const Attendance = await Attendance_Model.findById(ID);
        if (!Attendance) {
            res.status(400).json({
                Yinix: false,
                Chat: "Something's missing"
            });
            return;
        }

        const Sessions = await Attendance_Session_Model.find({ Attendance_Connection: Attendance._id });

        res.status(200).json({
            Yinix: true,
            Chat: "Here you go :)",
            Sessions: Sessions

        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :(",
            Error: Err
        });
    }
}

export const Create_Attendance_Session = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        const { Students } = req.body;

        const Attendance = await Attendance_Model.findById(ID);
        if (!Attendance) {
            res.status(400).json({
                Yinix: false,
                Chat: "Something's missing"
            });
            return;
        }

        if (Students.length !== Attendance.Students.length) {
            res.status(400).json({
                Yinix: false,
                Chat: "Did you just gain MORE students?!?!"
            });
            return;
        }

        const Session = await Attendance_Session_Model.create({
            ID: Create_Attendance_Session_Code(),
            Attendance_Students: Students,
            Attendance_Connection: Attendance._id
        });

        res.status(200).json({
            Yinix: true,
            Chat: "Coffee, attendance, repeat.",
            Sessions: Session

        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :(",
            Error: Err
        });
    }
}
export const Clear_Sessions = async (req: Request, res: Response) => {
    try {
        const { ID } = req.params;
        const Sessions = await Attendance_Session_Model.deleteMany({ Attendance_Connection: ID });

        res.status(200).json({
            Yinix: true,
            Chat: "Bye sessions :(",
        });
    } catch (Err) {
        res.status(400).json({
            Yinix: false,
            Chat: "Sorry :(",
            Error: Err
        });
    }
}