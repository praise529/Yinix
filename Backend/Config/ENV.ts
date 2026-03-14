import { config } from "dotenv";

config();

export const { PORT, YINIX_MONGODB_URI } = process.env;