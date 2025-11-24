import mongoose from "mongoose";

const Student_Schema = new mongoose.Schema({
  Name: { type: String, required: true },
});

const Classroom_Schema = new mongoose.Schema({
  Name: {
    type: String,
    trim: true,
    minLength: 2,
    maxLength: 100,
    required: [true, "Do you have NO name?"],
  },
  Room: {
    type: Number,
    required: false,
    default: "N/A"
  },
  Thumbnail: {
    type: String,
    required: false,
  },
  Students: [Student_Schema],
}, { timestamps: true });

const Classroom = mongoose.model("Classroom", Classroom_Schema)