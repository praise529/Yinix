import cors from "cors";
import express, { type Request, type Response } from "express";
import { config } from "dotenv";

config();

const App = express();
const PORT = process.env.PORT || 5000;

App.use(cors());
App.use(express.json());

App.get("/", (req: Request, res: Response) => {
  res.json({ Yinix: true });
});

App.listen(PORT, () => {
  console.log(`Yinix! - http://localhost:${PORT}`);
});
