import React, { useState } from 'react'

const Authenticate = () => {
    const [registered, setRegistered] = useState(false);
    return (
        <div id='authentication' className='authentication'>
            <div className="container">
                <h1>Create Your Account</h1>
                <div className="first-name-div">
                    <label htmlFor="register-first-name">First Name</label>
                    <input type="text" name="register-first-name" id="register-first-name" />
                </div>
                <div className="last-name-div">
                    <label htmlFor="register-last-name">Last Name</label>
                    <input type="text" name="register-last-name" id="register-last-name" />
                </div>
                <div className="email-div">
                    <label htmlFor="register-email">Email</label>
                    <input type="email" name="register-email" id="register-email" />
                </div>
                <div className="phone-div">
                    <label htmlFor="register-phone">Phone Number</label>
                    <input type="tel" name="register-phone" id="register-phone" />
                </div>
                <div className="password-div">
                    <label htmlFor="register-password">Password</label>
                    <input type="password" name="register-password" id="register-password" />
                </div>
                <div className="confirm-password-div">
                    <label htmlFor="register-confirm-password">Confirm Password</label>
                    <input type="password" name="register-confirm-password" id="register-confirm-password" />
                </div>
                <div className="show-password-div">
                    <input type="checkbox" name="register-show-password" id="register-show-password" />
                    <label htmlFor="register-show-password">Show Password</label>
                </div>
            </div>
        </div>
    )
}

export default Authenticate
