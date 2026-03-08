import { AppleLogo, GoogleLogo } from "phosphor-react"
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <>
            <br></br><br></br>
            <div className="Account_Form">
                <h1>Sign Up</h1>
                <p className="Muted">Get access to whiteboards, attendance, classrooms, and more*!</p><br></br>

                <form method="post" id="SignupForm">
                    <label>Your Name</label><br></br>
                    <input type="text" name="SignupName" id="SignupName"
                        required placeholder="Mary May" autoComplete="name"></input>

                    <label>Your Email</label><br></br>
                    <input type="email" name="SignupEmail" id="SignupEmail"
                        maxLength={255} minLength={5} placeholder="yourname@schooldomain.com" autoCapitalize="off"
                        autoComplete="email"></input>

                    <label>Your New Secure Password</label><br></br>
                    <input type="password" name="SignupPassword" id="SignupPassword"
                        placeholder="This might be chosen by your teacher" autoComplete="new-password"></input>

                    <div className="Row">
                        <div>
                            <label>Your Age</label><br></br><br></br>
                            <input type="number" name="SignupAge" id="SignupAge"
                                placeholder="10"></input>
                        </div>
                        <div>
                            <label>Your Role</label><br></br><br></br>
                            <select id="SignupRole" name="SignupRole">
                                <option value="Student">Student</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Parent">Parent/Guardian</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div><br></br><br></br>

                    <button type="submit">Signup!</button>
                </form><br></br><br></br>

                <div className="Social_Buttons">
                    <button className="OAuth2_Signin_Button White-Button" id="Google"><GoogleLogo weight="bold"></GoogleLogo> Sign Up With Google</button>
                    <button className="OAuth2_Signin_Button White-Button" id="Apple"><AppleLogo weight="bold"></AppleLogo> Sign Up With Apple</button>
                </div><br></br>

                <p>In the wrong place? <Link to="/Auth/Sign-in">Sign In</Link>!</p><br></br><br></br>
            </div>

        </>
    )
}

export default Signup
