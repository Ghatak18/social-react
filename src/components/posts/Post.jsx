import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import "./post.css"

const Post = () => {


  const [like, setLike] = useState(0);
  function handleLike() {
    setLike(like + 1);
  }
  const [comm, setComm] = useState(0);
  function handleComm() {
    setComm(comm + 1);
  }

  return (
    <div>
      <div className="postwrapper">
        <div className="postupper">
            <div className="postupperrleft">
                <img src="./assets/person/belurmath selfie1.jpg" alt=" error" className='postupperimg'/>
                <span className="postuppername">Supratik Ghatak</span>
                <span className="postupperdate">5 minits ago</span>
            </div>
            <div className="postupperright">
                <MoreVertIcon className='postupperlefticon'/>
            </div>
        </div>
        <div className="postcenter">
            <div className="postcentertext">Heyyy its my first post</div>
            <img src="./assets/person/belurmath selfie1.jpg" alt ="error" className='postcenterimg'></img>
            
        </div>
        <div className="postbottom">
            <div className="postbottomleft" onClick={handleLike}>
                <img src="./assets/like.jpeg" alt="error" className="like" />
                <img src="./assets/heart.png" alt="error" className="like" />
                <span className="likecount">{like} people liked</span>
            </div>
            <div className="postbottomright" >
                <span className="comment">{comm} Comments</span>
                <SendIcon className='sendicon'/>
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default Post
