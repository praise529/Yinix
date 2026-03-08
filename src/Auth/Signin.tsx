import { AppleLogo, CheckCircle, GoogleLogo, User, XCircle } from "phosphor-react"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SignIn } from '../../Auth/Sign-In';

const Signin = () => {
    const [Status, SetStatus] = useState("Not Yet");

    const [Code, SetCode] = useState("");
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");

    async function SignIN(E: React.FormEvent<HTMLFormElement>) {
        E.preventDefault();
        const Result = await SignIn(Code, Email, Password);
        if (!Result || Result.Yinix === false) {
            SetStatus("Error");
        } else {
            SetStatus("Done");
            console.log(Result);
            localStorage.setItem("Yinix-Account", JSON.stringify(Result));
            setTimeout(() => {

            }, 200);
        }
    }

    return (
        <>
            <br></br><br></br><div className="Account_Form">
                <h1>Sign In</h1>
                <p className="Muted">Get back access to whiteboards, attendance, classrooms, and more!*</p>
                {Status === "Error" && (
                    <div className="Center" style={{ gap: 10, color: "red" }}>
                        <XCircle weight="bold" size={25} />
                        <p style={{ color: "red" }}>Error, maybe try changing some things and doing it again?</p>
                    </div>
                )}
                {Status === "Done" && (
                    <div className="Center" style={{ gap: 10, color: "green" }}>
                        <CheckCircle weight="bold" size={25}></CheckCircle>
                        <p style={{ color: "green" }}>Submitted!</p>
                    </div>
                )}<br></br>

                <form method="post" id="Signin_Form" onSubmit={(E) => SignIN(E)}>
                    <label>Your Code</label><br></br>
                    <input type="number" name="Signin_Code" id="Signin_Code"
                        maxLength={7} required placeholder="010023" onChange={(E) => SetCode(E.target.value)}></input>
                    <label>Your Email</label><br></br>
                    <input type="email" name="Signin_Email" id="Signin_Email" onChange={(E) => SetEmail(E.target.value)}
                        maxLength={255} minLength={5} placeholder="name@domain.com" autoCapitalize="off"></input>
                    <label>Your Password</label><br></br>
                    <input type="password" name="Signin_Password" id="Signin_Password"
                        placeholder="Cat@134" onChange={(E) => SetPassword(E.target.value)}></input>

                    <button type="submit">Signin!</button>
                </form><br></br><br></br>

                <div className="SocialButtons">
                    <button className="OAuth2_Signin_Button White-Button" id="Google"><GoogleLogo weight="bold"></GoogleLogo> Sign In With Google</button>
                    <button className="OAuth2_Signin_Button White-Button" id="Apple"><AppleLogo weight="bold"></AppleLogo> Sign In With Apple</button>
                    <button className="OAuth2_Signin_Button White-Button" id="Guest"><User weight="bold"></User> Sign in as guest</button>
                </div><br></br>

                <p>In the wrong place? <Link to="/Auth/Sign-up">Sign Up</Link>!</p>
                <p className="Muted">* Requires an account 😥</p>
            </div>
        </>
    )
}

export default Signin
