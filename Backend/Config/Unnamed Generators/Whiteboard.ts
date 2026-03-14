export default function Create_Whiteboard_Name(): string {
    var Name_Number = "";

    for (let y = 0; y < 5; y++) {
        Name_Number += Math.floor(Math.random() * 10);
    }

    return `Whiteboard ${Name_Number}`;
}