import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'

const Main = () => {
    return (
        <main className='main-content'>
            <Sidebar />
            <Chat />
        </main>
    )
}

export default Main
