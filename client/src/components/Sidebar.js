import React, { useState, useEffect } from 'react'
import { FaUser } from "react-icons/fa"
import { IoEllipsisVertical } from "react-icons/io5"
import { RiMessage3Fill, RiCheckboxBlankCircleLine } from "react-icons/ri"
import AddConversation from './AddConversation'

const Sidebar = () => {

    const [showAddConversation, setShowAddConversation] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    let conversations = [
        {
            id: 1,
            conversationName: "Chaitanya",
            lastMessageTime: "9:30 pm",
            lastMessage: "hello my name is Chaitanya",
            unseenMessages: 2
        },
        {
            id: 2,
            conversationName: "Chaitanya",
            lastMessageTime: "9:30 pm",
            lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi nostrum quasi laudantium modi dolore! Reprehenderit neque rem, esse sequi impedit doloribus quasi blanditiis facere sit exercitationem veniam, quos labore, minus necessitatibus incidunt et expedita dignissimos nisi tempora tempore iusto quaerat. Consectetur fuga eum laudantium soluta. Ducimus nesciunt repellendus dicta.",
            unseenMessages: 2
        },
        {
            id: 3,
            conversationName: "Chaitanya",
            lastMessageTime: "9:30 pm",
            lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi nostrum quasi laudantium modi dolore! Reprehenderit neque rem, esse sequi impedit doloribus quasi blanditiis facere sit exercitationem veniam, quos labore, minus necessitatibus incidunt et expedita dignissimos nisi tempora tempore iusto quaerat. Consectetur fuga eum laudantium soluta. Ducimus nesciunt repellendus dicta.",
            unseenMessages: 2
        },
        {
            id: 4,
            conversationName: "Chaitanya",
            lastMessageTime: "9:30 pm",
            lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi nostrum quasi laudantium modi dolore! Reprehenderit neque rem, esse sequi impedit doloribus quasi blanditiis facere sit exercitationem veniam, quos labore, minus necessitatibus incidunt et expedita dignissimos nisi tempora tempore iusto quaerat. Consectetur fuga eum laudantium soluta. Ducimus nesciunt repellendus dicta.",
            unseenMessages: 1000
        },
        {
            id: 5,
            conversationName: "Chaitanya",
            lastMessageTime: "9:30 pm",
            lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi nostrum quasi laudantium modi dolore! Reprehenderit neque rem, esse sequi impedit doloribus quasi blanditiis facere sit exercitationem veniam, quos labore, minus necessitatibus incidunt et expedita dignissimos nisi tempora tempore iusto quaerat. Consectetur fuga eum laudantium soluta. Ducimus nesciunt repellendus dicta.",
            unseenMessages: 100
        },
        {
            id: 6,
            conversationName: "Chaitanya",
            lastMessageTime: "9:30 pm",
            lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi nostrum quasi laudantium modi dolore! Reprehenderit neque rem, esse sequi impedit doloribus quasi blanditiis facere sit exercitationem veniam, quos labore, minus necessitatibus incidunt et expedita dignissimos nisi tempora tempore iusto quaerat. Consectetur fuga eum laudantium soluta. Ducimus nesciunt repellendus dicta.",
            unseenMessages: 10
        },
    ];

    // conversations = [];

    useEffect(() => {
        if (showDropdown) {
            document.querySelector(".actions .dropdown").focus();
        }
    }, [showDropdown])

    return (
            <div className='sidebar-div'>
                <div className="sidebar-header">
                    <div className="user">
                        <FaUser className='user-img' />
                    </div>
                    <div className="actions">
                        <RiCheckboxBlankCircleLine />
                        <RiMessage3Fill title='Add Conversation' onClick={() => setShowAddConversation(true)} />
                        <IoEllipsisVertical onClick={() => setShowDropdown(prev => !prev)} />
                        <div tabIndex={1} className={"dropdown" + (showDropdown ? " show" : "")} onBlur={() => setShowDropdown(false)}>
                            <div className="dropdown-item">New Group</div>
                            <div className="dropdown-item">Add Contact</div>
                            <div className="dropdown-item">Important Messages</div>
                            <div className="dropdown-item">Log out</div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-body">
                    {
                        conversations.length > 0 ?
                            conversations.map(conversation => (
                                <div key={conversation.id}>
                                    <div className="user-wrapper">
                                        <div className="user">
                                            <FaUser className="user-img" />
                                        </div>
                                    </div>
                                    <div className="chat-wrapper">
                                        <div className="conversation-name-wrapper">
                                            <h3 className="conversation-name">{conversation.conversationName}</h3>
                                            <span className="conversation-time">{conversation.lastMessageTime}</span>
                                        </div>
                                        <div className="recent-chat-wrapper">
                                            <p className="recent-chat">{conversation.lastMessage}</p>
                                            <div className="messages-number">
                                                <span>{conversation.unseenMessages}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) :
                            <div className="no-conversations">
                                <p>You have no conversations</p>
                                <div className="btn" onClick={() => setShowAddConversation(true)}>
                                    Create One
                                </div>
                            </div>
                    }
                </div>
                <AddConversation showAddConversation={showAddConversation} setShowAddConversation={setShowAddConversation} />
            </div>
    )
}

export default Sidebar
