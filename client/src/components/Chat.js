import React, { useEffect, useRef } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoEllipsisVertical, IoSendSharp } from "react-icons/io5"
import { useConversations } from '../contexts/ConversationProvider'
import io from "socket.io-client"

const socket = io(process.env.REACT_APP_API_URL.replace("/api/v1", ""));
socket.on("connect", () => {
    console.log("connected");
})

const Chat = () => {

    const { conversation, conversations, setConversations } = useConversations();
    const chatWindow = useRef();
    const message = useRef('');

    useEffect(() => {
        socket.on("display-message", message => {
            displayMessage(message);
        })
    }, [])

    function displayMessage(message) {
        const messageDiv = document.createElement("DIV");
        messageDiv.className = "message";
        messageDiv.innerHTML = `<span>${message}</span>`
        chatWindow.current.appendChild(messageDiv);
        messageDiv.scrollIntoView({ behavior: "smooth" });
    }

    function addMessage() {
        const messageDiv = document.createElement("DIV");
        messageDiv.className = "message your-message";
        messageDiv.innerHTML = `<span>${message.current.value}</span>`
        chatWindow.current.appendChild(messageDiv);
        messageDiv.scrollIntoView({ behavior: "smooth" });

        const conversationName = conversation.conversationName;
        const lastMessageTime = new Date().toLocaleTimeString([], { hour: "numeric", minute: "numeric", hour12: true }).toLowerCase();
        const lastMessage = message.current.value;
        if (conversations.find(conversation => conversation.conversationName === conversationName)) {
            const conversationIndex = conversations.findIndex(conversation => conversation.conversationName === conversationName);
            const newConversation = conversations[conversationIndex];
            const unseenMessages = newConversation.unseenMessages + 1;
            setConversations(prev => [...prev.slice(0, conversationIndex), { ...newConversation, lastMessage, lastMessageTime, unseenMessages }, ...prev.slice(conversationIndex + 1)])
        } else {
            const unseenMessages = 1;
            setConversations(prev => [...prev, { id: conversations.length + 1, conversationName, lastMessageTime, lastMessage, unseenMessages }])
        }

        socket.emit("add-message", message.current.value);

        message.current.value = "";
    }

    return (
        <div className='chat-div'>
            {
                Object.keys(conversation).length > 0 ?
                    <>
                        <div className="chat-div-header">
                            <div className="conversation-wrapper">
                                <div className="user">
                                    <FaUser className='user-img' />
                                </div>
                                <div className='conversation-name-wrapper'>
                                    <span className="conversation-name">
                                        {conversation.conversationName}
                                    </span>
                                    <span className='user-active'>
                                        Active Now
                                    </span>
                                </div>
                            </div>
                            <div className="actions">
                                <IoEllipsisVertical />
                            </div>
                        </div>
                        <div ref={chatWindow} className="chat-div-body">
                            <div className="message">
                                <span>Hi</span>
                            </div>
                            <div className="message your-message">
                                <span>Hey!</span>
                            </div>
                            <div className="message">
                                <span>How are you?</span>
                            </div>
                            <div className="message your-message">
                                <span>I'm fine! what about you?</span>
                            </div>
                        </div>
                        <div className="chat-div-footer">
                            <input ref={message} type="text" placeholder='Message' onKeyDown={e => {
                                if (e.key === "Enter") {
                                    addMessage();
                                }
                            }} />
                            <IoSendSharp className='send-btn' onClick={addMessage} />
                        </div>
                    </>
                    :
                    <div className='no-conversation'>
                        No Conversation Selected
                    </div>
            }
        </div>
    )
}

export default Chat
