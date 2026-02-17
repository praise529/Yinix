import { Router } from "express";
import { Add_Classroom, AddStudentToClassroom, Get_ALL_Classrooms, Get_Classroom } from "../Controllers/Classroom.controller";

const Classroom_Router = Router();

Classroom_Router.get("/:ID", Get_Classroom);
Classroom_Router.get("/", Get_ALL_Classrooms);
Classroom_Router.post("/", Add_Classroom);
Classroom_Router.post("/:ID/Student", AddStudentToClassroom);

export default Classroom_Router;