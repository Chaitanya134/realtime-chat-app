import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoEllipsisVertical } from "react-icons/io5"
import { useConversations } from '../contexts/ConversationProvider'

const Chat = () => {

    const { conversation } = useConversations();

    return (
        <div className='chat-div'>
            {
                Object.keys(conversation).length > 0 ?
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
                    :
                    <div className='no-conversation'>
                        No Conversation Selected
                    </div>
            }
        </div>
    )
}

export default Chat
