import React, { useState } from 'react'
import { FaUser } from "react-icons/fa"
import { IoArrowBack } from "react-icons/io5"
import { AiOutlineSearch } from "react-icons/ai"
import { useContacts } from '../contexts/ContactProvider'
import { useConversations } from '../contexts/ConversationProvider'
import axios from 'axios'

const NewGroup = ({ showNewGroup, setShowNewGroup, setShowAddContact, setShowAddConversation }) => {

    // const [contacts, setContacts] = useState([
    //     {
    //         id: 1,
    //         contactName: "Chaitanya",
    //         aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
    //     },
    //     {
    //         id: 2,
    //         contactName: "Aakash",
    //         aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
    //     },
    //     {
    //         id: 3,
    //         contactName: "Ajay",
    //         aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
    //     },
    //     {
    //         id: 4,
    //         contactName: "Chitrankshi",
    //         aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
    //     },
    //     {
    //         id: 5,
    //         contactName: "Tanishk",
    //         aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
    //     },
    //     {
    //         id: 6,
    //         contactName: "Rahul",
    //         aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
    //     }
    // ]);

    const [groupParticipants, setGroupParticipants] = useState([]);
    const [showNewGroupModal, setShowNewGroupModal] = useState(false);
    const { contacts } = useContacts();
    const { conversations, setConversations } = useConversations();

    function addGroupParticipants(contact) {
        const { _id: contactId } = contact;
        const contactDiv = document.getElementById(`new-group-${contactId}`);
        if (groupParticipants.find(contact => contact._id === contactId)) {
            contactDiv.classList.remove("participant");
            setGroupParticipants(groupParticipants.filter(contact => contact._id !== contactId));
        } else {
            contactDiv.classList.add("participant");
            setGroupParticipants(prev => [...prev, contact]);
        }
    }

    let contactNameInitial = "";

    function addNameInitial(contactName) {
        if (contactNameInitial !== contactName[0].toUpperCase()) {
            contactNameInitial = contactName[0].toUpperCase();
            return (
                <div className='contact-name-initial'>
                    {contactNameInitial}
                </div>
            )
        }
        return null;
    }

    function searchParticipants(e) {
        document.querySelectorAll(".contact-name-initial").forEach(initial => {
            if (e.target.value === "") {
                initial.style.display = "flex";
            }
            else if (initial.innerText === e.target.value[0].toUpperCase()) {
                initial.style.display = "flex";
            } else {
                initial.style.display = "none";
            }
        })

        document.querySelectorAll(".contact-name").forEach(nameDiv => {
            if (e.target.value === "") {
                nameDiv.parentElement.parentElement.style.display = "flex";
            } else if (nameDiv.innerText.toLowerCase().startsWith(e.target.value.toLowerCase())) {
                nameDiv.parentElement.parentElement.style.display = "flex";
            } else {
                nameDiv.parentElement.parentElement.style.display = "none";
            }
        })
    }

    async function createNewGroup() {
        const conversationName = document.getElementById("new-group-name").value;
        const groupNameHelp = document.getElementById("new-group-help-name");
        const lastMessageTime = new Date().toLocaleTimeString([], { hour: "numeric", minute: "numeric", hour12: true }).toLowerCase();
        const lastMessage = `You created group "${conversationName}"`;
        const unseenMessages = 1;

        if (conversationName === "") {
            groupNameHelp.innerText = "Please enter a group name";
            groupNameHelp.style.display = "block";
            return;
        } else {
            groupNameHelp.style.display = "none";
        }

        const participants = groupParticipants.map(participant => participant._id)
        try {
            const userId = sessionStorage.getItem("realtime-chat-app-id");
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/conversation/new`, { conversationName, private: false, participants: [ userId, ...participants ] });
            console.log(response);
            const conversation = response.data.conversation;

            if (response.data.success) {
                setConversations(prev => [...prev, { _id: conversation._id, conversationName, lastMessageTime, lastMessage, unseenMessages }])
                groupParticipants.map(participant => {
                    const contactDiv = document.getElementById(`new-group-${participant._id}`);
                    contactDiv.classList.remove("participant");
                })
                setShowNewGroup(false);
                setShowAddConversation(false);
                setGroupParticipants([]);
                setShowNewGroupModal(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className={'new-group-div' + (showNewGroup ? " show" : "")}>
                <div className="sidebar-header">
                    <div className="actions">
                        <IoArrowBack onClick={() => setShowNewGroup(false)} />
                        <span>
                            Create New Group
                        </span>
                    </div>
                    {
                        groupParticipants.length > 0 ?
                            <button type="button" className="btn btn-border new-group-btn" onClick={() => setShowNewGroupModal(true)}>
                                Create
                            </button>
                            : null
                    }
                </div>
                <div className="sidebar-body">
                    <div className='conversation-search-wrapper'>
                        <AiOutlineSearch className='search-icon' />
                        <input type="text" placeholder='Search Participants' onChange={searchParticipants} />
                    </div>
                    {
                        contacts.length > 0 ?
                            contacts.sort((a, b) => a.contactName.localeCompare(b.contactName))
                                .map(contact => {
                                    return (
                                        <React.Fragment key={contact._id} >
                                            {addNameInitial(contact.contactName)}
                                            <div id={`new-group-${contact._id}`} onClick={() => addGroupParticipants(contact)}>
                                                <div className="user-wrapper">
                                                    <div className="user">
                                                        <FaUser className="user-img" />
                                                    </div>
                                                </div>
                                                <div className="about-user-wrapper">
                                                    <h3 className='contact-name'>{contact.contactName}</h3>
                                                    <p className='about-user'>{contact.bio}</p>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                }) :
                            <div className="no-contacts">
                                <p>You have no contacts</p>
                                <div className="btn" onClick={() => setShowAddContact(true)}>
                                    Add Contact
                                </div>
                            </div>
                    }

                </div>
            </div>
            <div className={"new-group-modal-bg" + (showNewGroupModal ? " show" : "")}>
                <div className="new-group-modal">
                    <div className="new-group-modal-header">
                        New Group
                    </div>
                    <div className="new-group-modal-body">
                        <div className='form-group-wrapper'>
                            <div className="contact-name-div form-group">
                                <input type="text" name="new-group-name" id="new-group-name" style={{ width: "100%" }} placeholder=' ' autoComplete="no" />
                                <label htmlFor="new-group-name">Group Name</label>
                            </div>
                            <small id="new-group-help-name" className='new-group-help-text' style={{ display: "none" }}>Enter your email</small>
                        </div>
                        <div className="new-group-modal-btn-wrapper">
                            <button className="btn btn-border" onClick={() => setShowNewGroupModal(false)}>Close</button>
                            <button className="btn" onClick={createNewGroup}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewGroup
