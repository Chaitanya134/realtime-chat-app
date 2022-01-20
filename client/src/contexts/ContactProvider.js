import React, { useState, useContext, createContext } from 'react'

const ContactContext = createContext();

export function useContacts() {
    return useContext(ContactContext);
}

const ContactProvider = ({ children }) => {

    const [contacts, setContacts] = useState([]);

    return (
        <ContactContext.Provider value={{ contacts, setContacts }}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactProvider
