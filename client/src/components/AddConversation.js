import React from 'react'
import { IoArrowBack } from "react-icons/io5"

const AddConversation = ({ showAddConversation, setShowAddConversation }) => {
    return (
        <div className={'add-conversation-div' + (showAddConversation ? " show" : "")}>
            <div className="sidebar-header">
                <div className="actions">
                    <IoArrowBack onClick={() => setShowAddConversation(false)} />
                    <span>
                        Add Conversation
                    </span>
                </div>
            </div>
            <div className="sidebar-body"></div>
        </div>
    )
}

export default AddConversation
