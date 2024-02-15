import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const Topbar = () => {
  return (
    <div className='topbarcontainer'>
      <div className="topbarleft">
        <span className="logo">GhatakSocial</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <SearchIcon className='searchicon'/>
          <input placeholder='Search' className="searchInput" />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <PersonIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <ChatIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <CircleNotificationsIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="./assets/person/belurmath selfie1.jpg" alt="error" className="topbarImg1" />
      </div>
    </div>
  )
}

export default Topbar
