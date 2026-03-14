import mongoose from "mongoose";

const Block_Schema = new mongoose.Schema({
    Type: {
        type: String,
        required: true,
        enum: ["Text_Block"],
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

    Elements: [Block_Schema]
});

const Whiteboard = mongoose.model("Whiteboard", Whiteboard_Schema);

export default Whiteboard;