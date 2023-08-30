import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router";
import { NavLink } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("")
    const Navigate = useNavigate();

    const handleSignup = (e) => {

        e.preventDefault();
        let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
        let pass = password.length >= 8;
        const validEmail = regex.test(email);

        if (validEmail && pass && name) {
            const config = {
                headers: {
                    projectId: 'ftid7x3bjwca'
                }
            };
            const body = {
                name: name,
                email: email,
                password: password,
                appType: "ott"
            };
            
            axios.post("https://academics.newtonschool.co/api/v1/user/signup", body, config)
                .then(response => {
                    console.log(response);
                    Navigate("/");
                })
                .catch(err => {
                    setMsg("Something Wrong");
                    console.log(err);
                })

        } 
    }


    return (
        <div className="signup">
            <div className="logo">
                <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="v" />
            </div>

            <div>

                <div className='form'>
                    <h1>SignUp</h1>
                    <h1 style={{ color: "red" }}>{msg}</h1>
                    <form>
                        <div>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                placeholder='Name...' 
                            />
                        </div>
                        <div>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email' 
                                placeholder='Email...'
                            />
                        </div>
                        <div>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password' 
                                placeholder='password...' 
                            />
                        </div>
                        <button onClick={handleSignup}>Submit</button>
                    </form>
                    <NavLink to="/">Already Account</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignUp
