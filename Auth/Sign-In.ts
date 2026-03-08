import { ServerURL } from '../src/Scripts/URLs';

export async function SignIn(Code: string, Email: string, Password: string) {
    try {
        const res = await fetch(`${ServerURL}/API/Auth/SignIn`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Code: Code, Email: Email, Password: Password })
        });
        const Data = res.json();

        console.log(Data);
        return Data;
    } catch (Err) {
        console.error(Err);
        return null;
    }
}