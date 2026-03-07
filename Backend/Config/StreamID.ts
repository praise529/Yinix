export default function CreateStreamID(): string {
    let StreamID = "";

    for (let y = 0; y < 20; y++) {
        StreamID += Math.floor(Math.random() * 10);
    }

    return StreamID;
}