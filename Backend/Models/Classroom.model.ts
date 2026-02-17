import mongoose from "mongoose";

const Student_Schema = new mongoose.Schema({
  ID: { type: mongoose.Types.ObjectId },
  Name: { type: String, required: true },
  Active: { type: Boolean, default: false }
});
const Stream_Schema = new mongoose.Schema({
  Content: { type: String, required: true },
  Classroom: { type: mongoose.Types.ObjectId, required: true },
  Account: { type: mongoose.Types.ObjectId, required: true },
})

const Classroom_Schema = new mongoose.Schema({
  Name: {
    type: String,
    trim: true,
    minLength: 2,
    maxLength: 100,
    required: [true, "Does your classroom have NO name?"],
  },
  Room: {
    type: String,
    required: false,
    default: "N/A"
  },
  Thumbnail: {
    type: String,
    required: false,
  },
  Students: [Student_Schema],

  Stream: [Stream_Schema],

  Subject: {
    type: String,
    default: "ALL",
    enum: ["ALL", "MATH", "SCIENCE", "LITERACY", "LANGUAGE LEARNING", "P.E.", "TECHNOLOGY", "ARTS"]
  }
}, { timestamps: true });

const Classroom = mongoose.model("Classroom", Classroom_Schema);

export default Classroom;