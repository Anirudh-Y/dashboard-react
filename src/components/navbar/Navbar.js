import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ModeContext from '../../context';
import React, { useContext } from 'react'
import './navbar.scss'
import { useState } from 'react';

function Navbar() {

  let { darkmode, dark } = useContext(ModeContext)
  let [mode, setMode] = useState(dark);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            {dark ? <DarkModeOutlinedIcon className="icon" onClick={(e) => {
              darkmode(false)
            }} /> : <WbSunnyOutlinedIcon className='icon' onClick={(e) => {
                darkmode(true)
            }} />}

          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListAltOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img className="avatar" src="https://images.pexels.com/photos/13315272/pexels-photo-13315272.jpeg?cs=srgb&dl=pexels-b%C3%BC%C5%9Franur-ayd%C4%B1n-13315272.jpg&fm=jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar