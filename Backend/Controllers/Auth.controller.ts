import type { NextFunction, Request, Response } from "express";
import { CreateAccountCode } from "../Config/Code.ts";
import mongoose from "mongoose";
import Account from "../Models/Account.model.ts";
import bcrypt from "bcryptjs";

const Sign_Up = async (req: Request, res: Response, Next: NextFunction) => {
  const Session = await mongoose.startSession();
  Session.startTransaction();

  try {
    const { Name, Email, Password, Role, Age } = req.body;
    const Code = CreateAccountCode();

    // --- Check for duplicates ---
    const Existing_Account = await Account.findOne({ Email }).session(Session);

    if (Existing_Account) {
      await Session.abortTransaction();
      await Session.endSession();
      console.log("Existing_Account =", Existing_Account);
      return res.status(409).json({
        Yinix: false,
        Chat: "No duplicate emails!"
      });
    }

    // --- Hash password ---
    const Salt = await bcrypt.genSalt(10);
    const Salted_Password = await bcrypt.hash(Password, Salt);

    // --- Create account ---
    const Created_Account = await Account.create(
      [
        {
          Code,
          Name,
          Email,
          Password: Salted_Password,
          Role,
          Age
        }
      ],
      { session: Session }
    );

    // --- Commit BEFORE sending response ---
    await Session.commitTransaction();
    await Session.endSession();

    return res.status(201).json({
      Yinix: true,
      Chat: "Hi there, welcome!",
      Info: Created_Account
    });

  } catch (Err) {
    await Session.abortTransaction();
    await Session.endSession();
    Next(Err);
  }
};


const Sign_In = async (req: Request, res: Response, Next: NextFunction) => {
  try {
    console.time("SignIn");

    const { Email, Password, Code } = req.body;

    let Existing_Account = await Account.findOne({
      $or: [
        { Email: Email },
        { Code: Code }
      ]
    });

    console.timeLog("SignIn", "After DB lookup");

    if (!Existing_Account) {
      Existing_Account = await Account.findOne({ Code });
      if (!Existing_Account) {
          return res.status(404).json({ Yinix: false, Chat: "No one's here..." });
      }
    }

    const IsPasswordRight = await bcrypt.compare(Password, Existing_Account.Password);
    console.timeLog("SignIn", "After password check");

    if (!IsPasswordRight) {
      return res.status(401).json({ Yinix: false, Chat: "Wrong password!" });
    }

    if (Existing_Account.Code !== Code) {
      return res.status(401).json({ Yinix: false, Chat: "2 layers of security..." });
    }

    const { Password: _, ...SafeAccount } = Existing_Account.toObject();

    console.timeEnd("SignIn");
    return res.status(200).json({ Yinix: true, Chat: "Welcome back!", Info: SafeAccount });
  } catch (Err) {
    Next(Err);
  }
};


const Sign_Out = async (req: Request, res: Response) => {
}

export { Sign_Up, Sign_In, Sign_Out }













/*
  {
  "Code": "0773465",
  "Email": "praiseo5@educbe.ca",
  "Password": "Yini#92Y"
}
*/