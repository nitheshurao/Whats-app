import React, { useEffect, useState } from 'react'
import { Avatar, } from '@material-ui/core';


import "./sidebarchat.css";

function Sidebarchat({ id, name,addNewChat }) {

    const [seed, setSeed] = useState('');


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 500));
    }, []);
    const createChat = () => {
        const roomName = prompt("please enter name for chat");

        if (roomName) {
            // some databse stuff...
        }

    };
    return !addNewChat ? (
        <div className="sidebarChat">

            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <h2>{name}</h2>
            <h6>chat</h6>

        </div>
    ) : (
        <div onClick={createChat} className="sidebarchat">
            <h2>add New Chat</h2>

        </div>
    );
}

export default Sidebarchat
