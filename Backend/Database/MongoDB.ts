import mongoose from "mongoose";
import { YINIX_MONGODB_URI } from "../Config/ENV";

const DB_URI = YINIX_MONGODB_URI;

if (!DB_URI) {
    throw new Error("Environment variable YINIX_MONGODB_URI is not set");
}

async function Connect_To_Database() {
    try {
        await mongoose.connect(DB_URI!);
        console.log("Connected! ⚙️");
    } catch (Err) {
        console.error(`Sorry... ${Err}`);
        process.exit(1);
    }
}

export default Connect_To_Database;