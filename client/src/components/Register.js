import React, { useState } from 'react'

const Register = ({ setRegistered }) => {

    function createUser() {
        const inputs = document.querySelectorAll(".form-group input");
        const nameHelpElement = document.getElementById("register-help-name");
        const emailHelpElement = document.getElementById("register-help-email");
        const phoneHelpElement = document.getElementById("register-help-phone");
        const passwordHelpElement = document.getElementById("register-help-password");

        let invalidFirstName = false;

        inputs.forEach(input => {
            if (input.value === "") {
                input.classList.add("invalid");
                switch (input.name) {
                    case "register-first-name":
                        nameHelpElement.innerText = "Enter first name";
                        invalidFirstName = true;
                        break;
                    case "register-last-name":
                        nameHelpElement.innerText = invalidFirstName ? "Enter first and last names"
                            : "Enter last name";
                        break;
                    case "register-email":
                        emailHelpElement.innerText = "Enter your email";
                        break;
                    case "register-phone":
                        phoneHelpElement.innerText = "Enter your phone";
                        break;
                    case "register-password":
                        passwordHelpElement.innerText = "Enter a password";
                        break;
                    default:
                        break;
                }
            } else {
                input.classList.remove("invalid");
                nameHelpElement.innerText = "";
                emailHelpElement.innerText = "";
                phoneHelpElement.innerText = "";
                passwordHelpElement.innerText = "";
                invalidFirstName = false;
            }
        })
    }

    function checkConfirmPassword(e) {
        const password = document.getElementById("register-password").value;
        const passwordHelpElement = document.getElementById("register-help-password");
        if (e.target.value !== password) {
            e.target.classList.add("invalid");
            passwordHelpElement.innerText = "Password does not match";
        } else {
            e.target.classList.remove("invalid");
            passwordHelpElement.innerText = "";
        }
    }

    function showPassword(e) {
        const passwordElement = document.getElementById("register-password");
        const confirmPasswordElement = document.getElementById("register-confirm-password");
        if (e.target.checked) {
            passwordElement.type = "text";
            confirmPasswordElement.type = "text";
        } else {
            passwordElement.type = "password";
            confirmPasswordElement.type = "password";
        }
    }

    return (
        <>
            <div className='form-group-wrapper'>
                <div className='register-name-group'>
                    <div className="first-name-div form-group" style={{ width: "48%" }}>
                        <input type="text" name="register-first-name" id="register-first-name" style={{ width: "100%" }} placeholder=' ' autoComplete="no" />
                        <label htmlFor="register-first-name">First Name</label>
                    </div>
                    <div className="last-name-div form-group" style={{ width: "48%" }}>
                        <input type="text" name="register-last-name" id="register-last-name" style={{ width: "100%" }} placeholder=' ' autoComplete="no" />
                        <label htmlFor="register-last-name">Last Name</label>
                    </div>
                </div>
                <small id="register-help-name" className='register-help-text'></small>
            </div>
            <div className='form-group-wrapper'>
                <div className="email-div form-group">
                    <input type="email" name="register-email" id="register-email" style={{ width: "100%" }} placeholder=' ' autoComplete="no" />
                    <label htmlFor="register-email">Email</label>
                </div>
                <small id="register-help-email" className='register-help-text'></small>
            </div>
            <div className='form-group-wrapper'>
                <div className="phone-div form-group">
                    <input type="tel" name="register-phone" id="register-phone" placeholder=' ' autoComplete="no" />
                    <label htmlFor="register-phone">Phone Number</label>
                </div>
                <small id="register-help-phone" className='register-help-text'></small>
            </div>
            <div className='form-group-wrapper'>
                <div className='register-password-group'>
                    <div className="password-div form-group" style={{ width: "48%" }}>
                        <input type="password" name="register-password" id="register-password" style={{ width: "100%" }} placeholder=' ' autoComplete="no" />
                        <label htmlFor="register-password">Password</label>
                    </div>
                    <div className="confirm-password-div form-group" style={{ width: "48%" }}>
                        <input type="password" name="register-confirm-password" id="register-confirm-password" style={{ width: "100%" }} placeholder=' ' onBlur={checkConfirmPassword} autoComplete="no" />
                        <label htmlFor="register-confirm-password">Confirm</label>
                    </div>
                </div>
                <small id="register-help-password" className='register-help-text'></small>
            </div>
            <div className="show-password-div">
                <input type="checkbox" name="register-show-password" id="register-show-password" onClick={showPassword} />
                <label htmlFor="register-show-password">Show Password</label>
            </div>
            <div className='create-btn-div'>
                <p onClick={() => setRegistered(prev => !prev)}>Sign in instead</p>
                <button type='button' className='btn create-user-btn' onClick={createUser}>Create</button>
            </div>
        </>
    )
}

export default Register;