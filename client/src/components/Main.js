import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import ContactProvider from '../contexts/ContactProvider'
import ConversationProvider from '../contexts/ConversationProvider'

const Main = () => {
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
