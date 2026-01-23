import mongoose from "mongoose";
import Create_Attendance_Session_Code from "../Config/Attendance_Code";

const Attendance_Schema = new mongoose.Schema({
    ID: String,

    Name: {
        type: String,
        minLength: 2,
        maxLength: 50
    },

    Students: {
        type: Array
    },

    Sessions: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

const Attendance_Model = mongoose.model("Attendance", Attendance_Schema);


const Attendance_Session_Schema = new mongoose.Schema({
    ID: {
        type: String,
        minLength: 2,
        maxLength: 50,
        default: Create_Attendance_Session_Code()
    },

    Attendance_Students: {
        type: Array,
    },

    Attendance_Date: {
        type: Date,
        default: new Date().toJSON(),
    },

    Attendance_Connection: {
        type: mongoose.Types.ObjectId,
    }
}, { timestamps: true });

const Attendance_Session_Model = mongoose.model("Attendance_Session", Attendance_Session_Schema);


export { Attendance_Model, Attendance_Session_Model };