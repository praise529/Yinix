import mongoose from "mongoose";

const Notification_Schema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Content: {
        type: String,
        required: false
    },
    Status: {
        type: String,
        default: "INFO",
        enum: ["ERROR", "SUCCESS", "INFO", "WARNING"]
    },
    Action: {
        type: String,
        default: "OK",
        enum: ["Start Now", "Double Check", "View", "OK"]
    }
}, { timestamps: true });

const Account_Schema = new mongoose.Schema({
    Code: {
        type: String,
        required: true,
        unique: true,
    },
    Name: {
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 100,
        required: [true, "Do you have NO name?"],
    },
    Email: {
        type: String,
        trim: true,
        unique: true,
        minLength: 5,
        maxLength: 255,
        required: false,
        match: [/\S+@\S+\.\S+/, "Emails must follow a pattern..."]
    },
    Password: {
        type: String,
        minLength: 1,
        required: [true, "No password, no Account."],
    },
    Age: {
        type: Number,
        required: [true, "Do you exist?"],
    },
    Role: {
        type: String,
        enum: ["Student", "Teacher", "Parent", "Other"],
    },
    Notifications: [Notification_Schema]
}, { timestamps: true });

const Account = mongoose.model("Account", Account_Schema);

export default Account;