import React from 'react'
import { useContacts } from "../contexts/ContactProvider";

const AddContact = ({ showAddContact, setShowAddContact }) => {

    const { addContact } = useContacts();

    function handleAddContact() {
        const email = document.getElementById("add-contact-email").value;
        const contactName = document.getElementById("add-contact-name").value;
        const helpText = document.getElementById("add-contact-help-email");

        addContact(email, contactName, helpText, setShowAddContact);
    }

    return (
        <div className={"add-contact-div" + (showAddContact ? " show" : "")}>
            <div className="add-contact-wrapper">
                <div className="add-contact-header">Add Contact</div>
                <div className="add-contact-body">
                    <div className='form-group-wrapper'>
                        <div className="email-div form-group">
                            <input type="email" name="add-contact-email" id="add-contact-email" style={{ width: "100%" }} placeholder=' ' autoComplete="no" />
                            <label htmlFor="add-contact-email">Email</label>
                        </div>
                        <small id="add-contact-help-email" className='add-contact-help-text' style={{ display: "none" }}>Contact already exists.</small>
                    </div>
                    <div className='form-group-wrapper'>
                        <div className="contact-name-div form-group">
                            <input type="text" name="add-contact-name" id="add-contact-name" style={{ width: "100%" }} placeholder=' ' autoComplete="no" />
                            <label htmlFor="add-contact-name">Contact Name</label>
                        </div>
                        <small id="add-contact-help-name" className='add-contact-help-text' style={{ display: "none" }}>Enter your email</small>
                    </div>
                    <div className="add-contact-btn-wrapper">
                        <button type="button" className="btn btn-border" onClick={() => setShowAddContact(false)}>Close</button>
                        <button type="button" className="btn" onClick={handleAddContact}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact
