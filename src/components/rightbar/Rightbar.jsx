import React from 'react'
import "./rightbar.css"
const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="birthdaycontainer">
          <img src="./assets/gift.png" alt="error" className="bithdayimg" />
          <span className="birthdayreminder"><b>Arnesh Halder</b> and<b> 9 othrs</b> has birthday today</span>
        </div>
        <div className="addsection">
          <img src="./assets/adpic.jpg" alt="error" className="addimg" />
        </div>
        <div className="onlinefriends">
          <h3 className='onlineheading'>Online Friends</h3>
          {/* <div className="onlinefriendscontainer">
            <div className="onlinefriendsimgcontainer">
              <img src="./assets/person/fizapic.png" alt="error" className="onlinefriendsimg"/>
              <span className="onlineindicator">00</span>
            </div>
            <span className="onlinefrndtext">Fiza Yasmin</span>
            
          </div> */}
          
          <div className="onlinefriendscontainer">
            <div className="onlinefriendsimgcontainer">
              <img src="./assets/person/mayankpic.png" alt="error" className="onlinefriendsimg"/>
              <span className="onlineindicator">00</span>
            </div>
            <span className="onlinefrndtext">Mayank Mallick</span>
            
          </div>
        </div>
    </div>
  )
}
      
  

export default Rightbar

