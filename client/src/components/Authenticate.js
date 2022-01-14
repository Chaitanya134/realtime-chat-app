import React, { useState } from 'react'
import Register from './Register';

const Authenticate = () => {

    const [registered, setRegistered] = useState(false);
    return (
        <div id='authentication' className='authentication'>
            <h1>Real-Time Chat App</h1>
            <div className="container">
                <h1>{ !registered ? "Create Your Account" : "Login"}</h1>
                {
                    !registered ? <Register setRegistered={setRegistered}/> : null
                }
            </div>
        </div>
    )
}

export default Authenticate
