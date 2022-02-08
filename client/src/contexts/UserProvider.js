import React, { useState, useContext, createContext } from 'react';

export function useUser() {
    return useContext(UserContext);
}

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
};

export default UserProvider;
