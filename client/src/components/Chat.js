import React, { useRef } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoEllipsisVertical, IoSendSharp } from "react-icons/io5"
import { useConversations } from '../contexts/ConversationProvider'

const Chat = () => {

    const { conversation } = useConversations();
    const chatWindow = useRef();
    const message = useRef('');

    function addMessage() {
        const messageDiv = document.createElement("DIV");
        messageDiv.className = "message your-message";
        messageDiv.innerHTML =  `<span>${message.current.value}</span>`       
        chatWindow.current.appendChild(messageDiv);
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
                                console.log(e);
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
