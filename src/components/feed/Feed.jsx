import React from 'react'
import "./feed.css"
import Share from "../share/Share"
import Post from "../posts/Post"
const Feed = () => {
  return (
    <div className="feed">
        <Share className="share"/>
        <Post className="post"/> 
        <Post className="post"/> 
        <Post className="post"/> 
        <Post className="post"/> 
        <Post className="post"/> 
        <Post className="post"/> 
        <Post className="post"/>    
        <Post className="post"/> 
        <Post className="post"/> 
        <Post className="post"/> 
        <Post className="post"/> 
    </div>
  )
}

export default Feed
