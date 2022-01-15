import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

const Authenticate = () => {

    const [registered, setRegistered] = useState(true);
    return (
        <div id='authentication' className='authentication'>
            <h1>Real-Time Chat App</h1>
            <div className={"container" + (registered ? " login" : "")}>
                <h1>{!registered ? "Create Your Account" : "Login"}</h1>
                {
                    !registered ? <Register setRegistered={setRegistered} />
                        : <Login setRegistered={setRegistered} />
                }
            </div>
        </div>
    )
}

export default Authenticate
