import React from 'react'
import { FaUser } from "react-icons/fa"
import { IoEllipsisVertical } from "react-icons/io5"
import { RiMessage3Fill, RiCheckboxBlankCircleLine } from "react-icons/ri"

const Sidebar = () => {
    return (
        <div className='sidebar-div'>
            <div className="sidebar-header">
                <div className="user">
                    <FaUser className='user-img' />
                </div>
                <div className="actions">
                    <RiCheckboxBlankCircleLine />
                    <RiMessage3Fill />
                    <IoEllipsisVertical />
                </div>
            </div>
            <div className="sidebar-body">
                <div>
                    <div className="user-wrapper">
                        <div className="user">
                            <FaUser className="user-img" />
                        </div>
                    </div>
                    <div className="chat-wrapper">
                        <div className="conversation-name-wrapper">
                            <h3 className="conversation-name">Chaitanya</h3>
                            <span className="conversation-time">9:30 pm</span>
                        </div>
                        <div className="recent-chat-wrapper">
                            <p className="recent-chat">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, accusamus quam nisi, nemo earum iure perspiciatis voluptas porro repellendus quae consectetur numquam necessitatibus dicta est explicabo error quod illo quaerat eaque molestias eligendi quos reiciendis placeat asperiores. Tenetur eveniet hic, facilis itaque esse veniam ea temporibus dolorum, ad laudantium dicta!</p>
                            <div className="messages-number">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
