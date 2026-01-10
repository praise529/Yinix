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
}, { timestamps: true });

const Classroom = mongoose.model("Classroom", Classroom_Schema);

export default Classroom;