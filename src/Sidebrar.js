import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import db from "./firebase";

import { SearchOutlined } from '@material-ui/icons';
import "./Sidebar.css";
import Sidebarchat from './Sidebarchat';


useEffect(() => {
    db.collection ('room').onSnapshot(snapsot => (

        setRooms(snapsot.docs.map(doc =>
            ({
                id:doc.id,
                data:doc.data(),
            })))
    ));
  
}, [input])
const [rooms, setRooms] = useState([]);
function Sidebrar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />


                <div className="sidear_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>   <ChatIcon />  </IconButton>

                    <IconButton>  <MoreVertIcon /></IconButton>

                </div>
            </div>

            <div className="sidebar_search">

                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search of satrt new chat" type="text" />


                </div>
            </div>


{/* addnewchata */}
            <div className="sidebar_chat">
                <Sidebarchat addNewChat/>
               {rooms.map((room) => (
                   <Sidebarchat key ={room.id} id ={room.id}
                   name ={room.data.name} />
                ) )}

            </div>

        </div>
    )
}

export default Sidebrar
