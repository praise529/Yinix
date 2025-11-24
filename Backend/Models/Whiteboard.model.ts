import mongoose from "mongoose";

const Block_Schema = new mongoose.Schema({
    Type: {
        type: String,
        required: true,
        enum: ["Text_Block", "Image_Upload", "Pen_Drawing"],
    },
    X: { type: Number, required: true },
    Y: { type: Number, required: true },
    Z: { type: Number, required: true }
})

const Whiteboard_Schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Created_Blocks: { type: [Block_Schema] },
});

const Whiteboard = mongoose.model("Whiteboard", Whiteboard_Schema);

export default Whiteboard;