import mongoose from "mongoose";
import Create_Screen_Code from "../Config/Screen_Code";

const Screen_Schema = new mongoose.Schema({
    Code: {
        type: String,
        minLength: 6,
        maxLength: 15,
        unique: true,
        default: Create_Screen_Code()
    },

    Account: {
        type: mongoose.Types.ObjectId,
        ref: "Account"
    },

    Peer_ID: {
        type: String, 
        default: null
    },

    Active: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Screen_Model = mongoose.model("Screen", Screen_Schema);

export default Screen_Model;