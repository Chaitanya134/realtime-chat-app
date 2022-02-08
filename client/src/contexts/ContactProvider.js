import axios from 'axios';
import React, { useState, useContext, createContext, useEffect } from 'react'
import { useUser } from './UserProvider';

const ContactContext = createContext();

export function useContacts() {
    return useContext(ContactContext);
}

const ContactProvider = ({ children }) => {

    const { user } = useUser();
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        if (user.savedContacts) {
            setContacts(user.savedContacts)
        }
    }, [user]);

    async function addContact(email, contactName, helpText, setShowAddContact) {
        const contactExists = contacts.find(contact => contact.email === email);
        if (contactExists) {
            helpText.style.display = "block";
            return
        } else {
            helpText.style.display = "none";
        }

        console.log(user);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}user/${user._id}/contact`, { email, contactName })
            const contact = response.data.contact;

            setContacts(prev => [...prev, { _id: contact._id, contactName, email, bio: contact.bio }]);
            console.log(contact);
        } catch (err) {
            console.log(err);
            console.log(err.message);
        }

        setShowAddContact(false);
    }

    return (
        <ContactContext.Provider value={{ contacts, setContacts, addContact }}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactProvider
