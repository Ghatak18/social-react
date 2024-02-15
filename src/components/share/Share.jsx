import React from 'react'
import "./share.css"
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className='share'>
      <div className="sharewrapper">
        <div className="shareupper">
            <img src="./assets/person/belurmath selfie1.jpg" alt="error" className="shareimg" />
            <input placeholder="What's on your mind today..??" className="shareinput" />
        </div>
        <hr></hr>
        <div className="sharebottom">
            <div className="sharebottomwrapper">
            <div className="shareoptions">
                
                <FolderCopyIcon htmlColor="tomato" className='sharephotoicon' />
                <span className="sharephototext">Photo or Video</span>

            </div>
            <div className="shareoptions">
                
                <LabelIcon htmlColor="blue" className='sharephotoicon' />
                <span className="sharephototext">Tag</span>

            </div>
            <div className="shareoptions">
                
                <LocationOnIcon htmlColor="green" className='sharephotoicon' />
                <span className="sharephototext">Location</span>

            </div>
            <div className="shareoptions">
                
                <EmojiEmotionsIcon htmlColor="	gold" className='sharephotoicon' />
                <span className="sharephototext">Feelings</span>

            </div>

            
            </div>
            <button className="sharebottombtn">SHARE</button>
        </div>
      </div>
    </div>
  )
}

export default Share
