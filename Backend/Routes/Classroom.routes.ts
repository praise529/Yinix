import { Router } from "express";
import { Add_Classroom, AddStudentToClassroom, GetALLClassrooms, Get_Classroom, SendClassStream } from "../Controllers/Classroom.controller";

const Classroom_Router = Router();

Classroom_Router.get("/:ID", Get_Classroom);
Classroom_Router.get("/", GetALLClassrooms);
Classroom_Router.post("/", Add_Classroom);
Classroom_Router.get("/:ID/Stream", SendClassStream);
Classroom_Router.post("/:ID/Student", AddStudentToClassroom);

export default Classroom_Router;