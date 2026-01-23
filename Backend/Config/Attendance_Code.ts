export default function Create_Attendance_Session_Code() {
    let ID = "";

    for (let y = 0; y < 21; y++) {
        ID += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"[Math.floor(Math.random() * 62)]
    }

    return ID;
}