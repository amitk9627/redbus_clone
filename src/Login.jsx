import { useState,useContext} from "react";
import { Button, Grid, Typography } from "@mui/material"
import axios from 'axios'
import { useNavigate, } from "react-router";
import { TextField } from '@mui/material';
import {NavLink} from 'react-router-dom'
import {LoginData} from './AuthContext/AuthContext'
const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const {}=useContext(LoginData);
    const Navigate = useNavigate();

    const handleLogin = () => {
        let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
        let pass = password.length >= 6;
        if (regex.test(email) && pass) {
            const config = {
                headers: {
                    projectId: 'ftid7x3bjwca'
                }
            }
            const data = {
                email: email,
                password: password,
                appType:'ott'
            }
            axios.post("https://academics.newtonschool.co/api/v1/user/login", data, config)
                .then(response => {
                    //    setTokenAll(response.data);
                    Navigate("/home")
                })
                .catch(err => {
                    setMsg("Login unsuccessfull");
                    console.log(err);
                })

        }

    }


    return (
        <div className="login">
            <div className="logo">
                <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="" />
            </div>
            <Grid container justifyContent="center" alignItems="center" textAlign="center" >

                <Grid item lg={4} sx={{ bgcolor: "#fff",p:"40px",borderRadius:8 }}>

                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <Typography variant="h5" color={"red"}>
                        {msg}
                    </Typography>
                    <Grid item sx={{ mb: "20px" }}>
                        <TextField
                            style={{ minWidth: "70%" }}
                            required
                            id="outlined-required"
                            label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        />
                    </Grid>
                    <Grid item sx={{ mb: "20px" }}>
                        <TextField
                            style={{ minWidth: "70%" }}
                            required
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            
                        />
                    </Grid>

                    <Grid>
                        <Button variant="contained" sx={{ width: "70%", p: "10px", fontSize: "1.2rem", mb: "20px" }} onClick={handleLogin}>Login</Button>
                    </Grid>
                    <NavLink to="/signup">New User</NavLink>


                </Grid>
            </Grid>


        </div>
    )
}



export default Login
