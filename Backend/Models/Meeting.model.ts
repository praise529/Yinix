import mongoose from "mongoose";

const Meeting_Schema = new mongoose.Schema({
    Name: {
        unique: true,
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
    },

    Date_Time: {
        type: Date,
    },

    Participants: {
        type: Array,
    },

    Status: {
        type: String,
        default: "Inactive",
        enum: ["Active", "Inactive"]
    }
}, { timestamps: true });

const Meeting = mongoose.model("Meeting", Meeting_Schema);

export default Meeting;