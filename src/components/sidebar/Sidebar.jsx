import React from 'react'
import "./sidebar.css"
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SchoolIcon from '@mui/icons-material/School';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarwrapper">
          <ul className="sidebarlist">
            <li className="sidebaritems">
              <FeedIcon className='sidebaricon'/>
              <span className="sidebarlistitemtext">Feed</span>
            </li>
            <li className="sidebaritems">
              <ChatIcon className='sidebaricon'/>
              <span className="sidebarlistitemtext">Chats</span>
            </li>
            <li className="sidebaritems">
              <PlayCircleIcon className='sidebaricon'/>
              <span className="sidebarlistitemtext">Videos</span>
            </li>
            <li className="sidebaritems">
              <GroupIcon className='sidebaricon'/>
              <span className="sidebarlistitemtext">Groups</span>
            </li>
            <li className="sidebaritems">
              <BookmarkIcon className='sidebaricon'/>
              <span className="sidebarlistitemtext">Bookmarks</span>
            </li>
            <li className="sidebaritems">
              <WorkIcon className='sidebaricon'/>
              <span className="sidebarlistitemtext">jobs</span>
            </li>
            <li className="sidebaritems">
              <HelpOutlineIcon className='sidebaricon'/>
              <span className="sidebarlistitemtext">Questions</span>
            </li>
            <li className="sidebaritems">
              <DateRangeIcon className='sidebaricon'/>
              <span className="sidebarlistitemtext">Events</span>
            </li>
            <li className="sidebaritems">
              <SchoolIcon className='sidebaricon'/>
              <span className="sidebarlistitemtext">Courses</span>
            </li>
          </ul>
          <button className="sidebarbtn">Show More</button>
          <hr className='hr'></hr>
          <ul className="sidebarfrndlist">
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>  
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>

            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>


            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>

            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>

            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>
            <li className="sidebarfrnd">
              <img src="./assets/person/arneshpic.png" alt="error" className="sidebarfrndimg" /> 
              <h4 className="sidebarfrndname">Arnesh halder</h4>
            </li>

            
          </ul>
        </div>
      
    </div>
  )
}

export default Sidebar
