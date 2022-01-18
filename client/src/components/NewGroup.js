import React, { useState, useEffect } from 'react'
import { FaUser, FaUserFriends } from "react-icons/fa"
import { IoArrowBack } from "react-icons/io5"
import { AiOutlineSearch } from "react-icons/ai"

const NewGroup = ({ showNewGroup, setShowNewGroup }) => {

    const [contacts, setContacts] = useState([
        {
            id: 1,
            contactName: "Chaitanya",
            aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
        },
        {
            id: 2,
            contactName: "Aakash",
            aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
        },
        {
            id: 3,
            contactName: "Ajay",
            aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
        },
        {
            id: 4,
            contactName: "Chitrankshi",
            aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
        },
        {
            id: 5,
            contactName: "Tanishk",
            aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
        },
        {
            id: 6,
            contactName: "Rahul",
            aboutUser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat."
        }
    ]);

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

    function searchContacts(e) {
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
            } else if (nameDiv.innerText.includes(e.target.value)) {
                nameDiv.parentElement.parentElement.style.display = "flex";
            } else {
                nameDiv.parentElement.parentElement.style.display = "none";
            }
        })
    }

    return (
        <div className={'new-group-div' + (showNewGroup ? " show" : "")}>
            <div className="sidebar-header">
                <div className="actions">
                    <IoArrowBack onClick={() => setShowNewGroup(false)} />
                    <span>
                        Create New Group
                    </span>
                </div>
            </div>
            <div className="sidebar-body">
                <div className='conversation-search-wrapper'>
                    <AiOutlineSearch className='search-icon' />
                    <input type="text" placeholder='Search Participants' onChange={searchContacts} />
                </div>
                {
                    contacts.length > 0 ?
                        contacts.sort((a, b) => a.contactName.localeCompare(b.contactName))
                            .map(contact => {
                                return (
                                    <React.Fragment key={contact.id} >
                                        {addNameInitial(contact.contactName)}
                                        <div>
                                            <div className="user-wrapper">
                                                <div className="user">
                                                    <FaUser className="user-img" />
                                                </div>
                                            </div>
                                            <div className="about-user-wrapper">
                                                <h3 className='contact-name'>{contact.contactName}</h3>
                                                <p className='about-user'>{contact.aboutUser}</p>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            }) :
                        <div className="no-contacts">
                            <p>You have no contacts</p>
                            <div className="btn" onClick={() => setShowNewGroup(true)}>
                                Add Contact
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

export default NewGroup
