import React, { useState, useContext, createContext } from 'react';

const ConversationContext = createContext();

export function useConversations() {
    return useContext(ConversationContext);
}

const ConversationProvider = ({ children }) => {

    const [conversation, setConversation] = useState({});
    const [conversations, setConversations] = useState([]);

    return (
        <ConversationContext.Provider value={{ conversation, setConversation, conversations, setConversations }}>
            {children}
        </ConversationContext.Provider>
    )
};

export default ConversationProvider;
