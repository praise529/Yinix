function CreateAccountCode(Times: number = 7) {
    let ID = "";

    for (let y = 0; y < Times; y++) {
        const Y = Math.floor(Math.random() * 10);
        ID = ID + Y;
    }

    return ID;
}

export { CreateAccountCode }