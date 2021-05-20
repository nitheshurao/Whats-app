
import "./chat.css";
import React, { useEffect, useState } from 'react'

import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {

    const [input, setInput] = useState("");



    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMassage = (e) => {
        e.preventDefault();
        console.log("you typed", input);
        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat_hedder">

                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_hedderInfo">

                    <h3> room name</h3>
                    <p> last seen</p>
                </div>
                <div className="chat_hedderRight">


                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>  <AttachFile />  </IconButton><IconButton>  <MoreVertIcon /></IconButton>
                </div>
            </div>

            <div className="chat_body">
                <div className={`chat_message ${true && 'chat_rec'}`}>
                    <spn className="chat_name">Nithesh</spn>

                hey

                   <span className="chat_timestamp">3:52pm</span>

                </div>
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form >
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMassage} type="submit"> Send a message</button>

                </form>
                <MicIcon />
            </div>



        </div>
    )
}

export default Chat
