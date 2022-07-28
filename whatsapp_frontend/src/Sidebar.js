import React from 'react';
import "./Sidebar.css";
import  DonutLargeIcon  from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className='sidebar_header'>
        <Avatar src="https://tse3.mm.bing.net/th?id=OIP.OJMH1q9cS-AFG308T5O_PQHaLH&pid=Api&P=0"/>
      <div className='sidebar_headerRight'>
        <IconButton>
        <DonutLargeIcon />
        </IconButton>
        <IconButton>
        <ChatIcon />
        </IconButton>
        <IconButton>
        <MoreVertIcon />
        </IconButton>
      </div>
     </div> 

     <div className="sidebar_search">
        <div className="sidebar_searchContainer">
            <SearchOutlined />
            <input placeholder='Search or start new chat' type="text"/>
        </div>
      </div>  

    </div>
  )
}

export default Sidebar;
