import mongoose from "mongoose";

const Meeting_Schema = new mongoose.Schema({
    Name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
    },

    Time: {
        type: String,
        required: false,
        default: Date.now()
    },

    Participants: {
        type: Array
    },
    Participants_Number: {
        type: Number,
    },

    Host: {
        type: mongoose.Types.ObjectId
    }
}, { timestamps: true });

const Meeting = mongoose.model("Meeting", Meeting_Schema);

export default Meeting;