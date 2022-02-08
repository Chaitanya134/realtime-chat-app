import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import ContactProvider from '../contexts/ContactProvider'
import ConversationProvider from '../contexts/ConversationProvider'
import { useUser } from '../contexts/UserProvider';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Main = () => {

    const { setUser } = useUser();
    const navigate = useNavigate();

    async function getUserById(id) {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}user/${id}`);
        const user = response.data.user;
        return user;
    }

    useEffect(() => {
        // if user is not logged in redirect to / else set user
        if (!sessionStorage.getItem('realtime-chat-app-id')) {
            navigate('/');
        } else {
            const userId = sessionStorage.getItem('realtime-chat-app-id');
            getUserById(userId).then(user => {
                setUser(user);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [])

    return (
        <main className='main-content'>
            <ConversationProvider>
                <ContactProvider>
                    <Sidebar />
                </ContactProvider>
                <Chat />
            </ConversationProvider>
        </main>
    )
}

export default Main
