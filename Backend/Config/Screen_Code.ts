export default function Create_Screen_Code(Times = 6): string {
    let ID = "";

    for (let y = 0; y < Times; y++) {
        const Y = Math.floor(Math.random() * 10);
        ID = ID + Y;
    }

    return ID;
}