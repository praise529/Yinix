export default function CreateStreamID(): string {
    let StreamID = "93";

    for (let y = 0; y < 6; y++) {
        StreamID += Math.floor(Math.random() * 10);
    }

    return StreamID;
}