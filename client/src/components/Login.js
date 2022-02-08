import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';

const Login = ({ setRegistered }) => {

    const { setUser } = useUser();
    const navigate = useNavigate();

    async function getUserById(id) {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}user/${id}`);
        const user = response.data.user;
        return user;
    }

    // if user is already logged in, redirect to /chat
    useEffect(() => {
        if (sessionStorage.getItem('realtime-chat-app-id')) {
            const userId = sessionStorage.getItem('realtime-chat-app-id');

            getUserById(userId).then(user => {
                console.log(user);
                setUser(user);
            }).catch(err => {
                console.log(err);
            });

            navigate('/chat');
        }
    }, []);

    async function login() {
        try {
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            const body = {
                email,
                password
            }

            const response = await axios.post(process.env.REACT_APP_API_URL + "user/login", body);
            console.log(response);
            setUser(response.data.user);

            sessionStorage.setItem('realtime-chat-app-id', response.data.user._id);

            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async function checkUser() {
        const inputs = document.querySelectorAll(".form-group input");
        const emailHelpElement = document.getElementById("login-help-email");
        const passwordHelpElement = document.getElementById("login-help-password");

        let validUser = true;

        inputs.forEach(input => {
            if (input.value === "") {

                validUser = false;
                input.classList.add("invalid");
                switch (input.name) {
                    case "login-email":
                        emailHelpElement.style.display = "block";
                        break;
                    case "login-password":
                        passwordHelpElement.style.display = "block";
                        break;
                    default:
                        break;
                }
            } else {
                input.classList.remove("invalid");
                emailHelpElement.style.display = "none";
                passwordHelpElement.style.display = "none";
            }
        })
        return validUser;
    }

    async function loginUser() {
        const validUser = await checkUser();
        if (validUser) {
            const status = await login();
            if (status) {
                document.getElementById("login-invalid").style.display = "none";
                navigate("/chat", { replace: true });
            } else {
                document.getElementById("login-invalid").style.display = "block";
            }
        }
    }

    function showPassword(e) {
        const passwordElement = document.getElementById("login-password");
        if (e.target.checked) {
            passwordElement.type = "text";
        } else {
            passwordElement.type = "password";
        }
    }

    return (
        <>
            <div className='form-group-wrapper'>
                <div className="email-div form-group">
                    <input type="email" name="login-email" id="login-email" style={{ width: "100%" }} placeholder=' ' autoComplete="no" />
                    <label htmlFor="login-email">Email</label>
                </div>
                <small id="login-help-email" className='login-help-text' style={{ display: "none" }}>Enter your email</small>
            </div>
            <div className='form-group-wrapper'>
                <div className="password-div form-group">
                    <input type="password" name="login-password" id="login-password" style={{ width: "100%" }} placeholder=' ' autoComplete="no" />
                    <label htmlFor="login-password">Password</label>
                </div>
                <small id="login-help-password" className='login-help-text' style={{ display: "none" }}>Enter your password</small>
            </div>
            <div className="show-password-div">
                <input type="checkbox" name="login-show-password" id="login-show-password" onClick={showPassword} />
                <label htmlFor="login-show-password">Show Password</label>
                <small id="login-invalid" style={{ display: "none", color: "red", marginLeft: "auto" }}>Invalid username or password</small>
            </div>
            <div className='create-btn-div'>
                <p onClick={() => setRegistered(prev => !prev)}>Create Account</p>
                <button type='button' className='btn login-btn' onClick={loginUser}>Login</button>
            </div>
        </>
    )
}

export default Login
